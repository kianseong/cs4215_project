import { RustCompileTimeEnvironment } from "./RustCompileTimeEnvironment"

export class RustCompiler {

    private wc: number
    private instrs: any[]

    constructor() {
        this.wc = 0
        this.instrs = []
    }

    scan_for_locals(comps: any[]): any[] {
        let locals = []
        let locals_properties = {}
        for (let comp of comps) {
            if (['let', 'fun'].includes(comp.tag)) {
                locals.push(comp.sym)
                if (comp.sym in locals_properties) {
                    throw new Error('Repeated variable declaration')
                }
                locals_properties[comp.sym] = {mut: comp.mut, type: comp.type, borrow_read: 0, borrow_write: 0, owner: [], can_read: true, can_write: true}
            }
        }
        return [locals, locals_properties]
    }

    get_owner(pos: number[], ce: string[], cv: any[]) {
        return cv[pos[0]][ce[pos[0]][pos[1]]].owner
    }

    check_can_read(pos: number[], ce: string[], cv: any[]) {
        return cv[pos[0]][ce[pos[0]][pos[1]]].can_read
    }

    check_can_write(pos: number[], ce: string[], cv: any[]) {
        return cv[pos[0]][ce[pos[0]][pos[1]]].can_write
    }

    find_all_variables_referenced(expr: any, new_pos: any[], ce: string[][], cv: any[]): any {
        let vars_moved: any[][] = []
        let vars_borrow_read: any[][] = []
        let vars_borrow_write: any[][] = []
        if (expr.tag === "nam") {
            let [frame_index, var_index] = RustCompileTimeEnvironment.compile_time_environment_position(ce, expr.sym)
            if (frame_index !== new_pos[0] || expr.sym !== new_pos[1]) {
                if (expr.borrow && expr.mut) {
                    vars_borrow_write.push([frame_index, expr.sym])
                } else if (expr.borrow) {
                    vars_borrow_read.push([frame_index, expr.sym])
                } else {
                    vars_moved.push([frame_index, expr.sym])
                }
            }    
        }
        return {moved: vars_moved, read: vars_borrow_read, write: vars_borrow_write}
    }

    update_all_owner_borrow_relationships(expr: any, new_pos: any[], ce: string[][], cv: any[]): any {
        const my_frame = new_pos[0]
        const my_symbol = new_pos[1]
        if (cv[my_frame][my_symbol].borrow_read !== 0 || cv[my_frame][my_symbol].borrow_write !== 0) {
            throw new Error(`Cannot modify variable ${my_symbol} while there are active borrows`)
        }
        if (!cv[my_frame][my_symbol].can_write) {
            throw new Error(`Cannot modify immutably borrowed variable ${my_symbol}`)
        }
        // set default owner, can_read, can_write
        cv[my_frame][my_symbol].owner = [my_frame, my_symbol]
        cv[my_frame][my_symbol].can_read = true
        cv[my_frame][my_symbol].can_write = true

        let variables_referenced = this.find_all_variables_referenced(expr, new_pos, ce, cv)
        let variables_moved = variables_referenced.moved
        let variables_borrowed_read = variables_referenced.read
        let variables_borrowed_write = variables_referenced.write

        if (variables_moved.length === 0 && variables_borrowed_read.length === 0 && variables_borrowed_write.length === 0) {
            return
        } else if (variables_moved.length === 1 && variables_borrowed_read.length === 0 && variables_borrowed_write.length === 0) {
            let [ref_frame, ref_symbol] = variables_moved[0]
            if (cv[ref_frame][ref_symbol].owner[0] != ref_frame || cv[ref_frame][ref_symbol].owner[1] != ref_symbol) { 
                throw new Error(`Cannot move ownership as variable ${ref_symbol} is a borrowed variable.`)
            }

            if (cv[ref_frame][ref_symbol].borrow_read !== 0 || cv[ref_frame][ref_symbol].borrow_write !== 0) {
                throw new Error(`Cannot move ownership while variable ${ref_symbol} is borrowed out.`)
            }

            cv[ref_frame][ref_symbol].owner = null
            cv[my_frame][my_symbol].owner = [my_frame, my_symbol]
            cv[my_frame][my_symbol].can_read = true
            cv[my_frame][my_symbol].can_write = true

        } else if (variables_moved.length === 0 && variables_borrowed_read.length === 1 && variables_borrowed_write.length === 0) {
            let [ref_frame, ref_symbol] = variables_borrowed_read[0]
            if (cv[ref_frame][ref_symbol].owner[0] != ref_frame || cv[ref_frame][ref_symbol].owner[1] != ref_symbol) {
                throw new Error(`Simple Rust currently does not support borrowing of borrowed variable ${ref_symbol}.`)
            }

            if (!cv[ref_frame][ref_symbol].can_read) {
                throw new Error(`Cannot immutably borrow variable ${ref_symbol} as it has already been mutably borrowed.`)
            }

            cv[ref_frame][ref_symbol].can_write = false
            cv[ref_frame][ref_symbol].can_read = true

            cv[my_frame][my_symbol].can_read = true
            cv[my_frame][my_symbol].can_write = false
            cv[my_frame][my_symbol].owner = cv[ref_frame][ref_symbol].owner

            cv[ref_frame][ref_symbol].borrow_read += 1

        } else if (variables_moved.length === 0 && variables_borrowed_read.length === 0 && variables_borrowed_write.length === 1) {
            let [ref_frame, ref_symbol] = variables_borrowed_write[0]
            if (cv[ref_frame][ref_symbol].owner[0] != ref_frame || cv[ref_frame][ref_symbol].owner[1] != ref_symbol) {
                throw new Error(`Simple Rust currently does not support borrowing of borrowed variable ${ref_symbol}.`)
            }

            if (!cv[ref_frame][ref_symbol].can_write) {
                throw new Error(`Cannot mutably borrow variable ${ref_symbol} as it has already been borrowed.`)
            }

            cv[ref_frame][ref_symbol].can_write = false
            cv[ref_frame][ref_symbol].can_read = false

            cv[my_frame][my_symbol].can_read = true
            cv[my_frame][my_symbol].can_write = true
            cv[my_frame][my_symbol].owner = cv[ref_frame][ref_symbol].owner

            cv[ref_frame][ref_symbol].borrow_write += 1

        } else {
            // here, we have a mix of borrows and ownerships. This remains a future work to be done 
            throw new Error("Assignment of variable with multiple borrows/ownership transfers is not supported in simple Rust.")
        }
    }

    release_borrowed_variables(cv: any[]) {
        let curr_frame = cv.length - 1
        let exiting_frame = cv.at(-1)
        for (let nam of Object.keys(exiting_frame)) {
            let owner = exiting_frame[nam].owner
            if (owner == null || owner[0] === curr_frame && owner[1] === nam) {
                continue
            }
            if (exiting_frame[nam].can_write) {
                cv[owner[0]][owner[1]].borrow_write -= 1
                cv[owner[0]][owner[1]].can_read = true
                cv[owner[0]][owner[1]].can_write = true
            } else {
                cv[owner[0]][owner[1]].borrow_read -= 1
                if (cv[owner[0]][owner[1]].borrow_read === 0) {
                    cv[owner[0]][owner[1]].can_write = true
                }                
            }
        }

    }

    compile_sequence(seq: any, value_producing: boolean, ce: string[][], cv: any[]) {
        if (seq.length === 0)
            return this.instrs[this.wc++] = {tag: "LDC", val: undefined}
        let first = true
        for (let comp of seq) {
            first ? first = false
                  : this.instrs[this.wc++] = {tag: 'POP'}
            this.compile(comp, ce, cv)
        }
        if (!value_producing) {
            this.instrs[this.wc++] = {tag: 'POP'}
            this.instrs[this.wc++] = {tag: "LDC", val: undefined}
        }
    }

    private compile_comp: { [key: string]: any } = {
    lit:
        (comp, ce, cv) => {
            this.instrs[this.wc++] = { tag: "LDC",
                             val: comp.val
            }
        },
    nam:
        // store precomputed position information in LD instruction
        (comp, ce, cv) => {
            let pos = RustCompileTimeEnvironment.compile_time_environment_position(
                ce, comp.sym)
            if (pos[0] > 1 && this.get_owner(pos, ce, cv) === null) {
                throw new Error(`Variable ${comp.sym} has been moved`)
            }

            if (pos[0] > 1 && !this.check_can_read(pos, ce, cv)) {
                throw new Error(`Variable ${comp.sym} has been borrowed mutably and cannot be read from.`)
            }
            
            this.instrs[this.wc++] = { tag: "LD",
                             sym: comp.sym,
                             pos: pos
                            }
        },
    unop:
        (comp, ce, cv) => {
            this.compile(comp.frst, ce, cv)
            this.instrs[this.wc++] = {tag: 'UNOP', sym: comp.sym}
        },
    binop:
        (comp, ce, cv) => {
            this.compile(comp.frst, ce, cv)
            this.compile(comp.scnd, ce, cv)
            this.instrs[this.wc++] = {tag: 'BINOP', sym: comp.sym}
        },
    cond:
        (comp, ce, cv) => {
            this.compile(comp.pred, ce, cv)
            const jump_on_false_instruction = {tag: 'JOF', addr: undefined}
            this.instrs[this.wc++] = jump_on_false_instruction
            this.compile(comp.cons, ce, cv)
            const goto_instruction = { tag: 'GOTO', addr: undefined}
            this.instrs[this.wc++] = goto_instruction;
            const alternative_address = this.wc;
            jump_on_false_instruction.addr = alternative_address;
            if (comp.alt !== undefined) {
                this.compile(comp.alt, ce, cv)
            } else {
                this.instrs[this.wc++] = {tag: "LDC", val: undefined}
            }
            goto_instruction.addr = this.wc
        },
    while:
        (comp, ce, cv) => {
            const loop_start = this.wc
            this.compile(comp.pred, ce, cv)
            const jump_on_false_instruction = {tag: 'JOF', addr: undefined}
            this.instrs[this.wc++] = jump_on_false_instruction
            this.compile(comp.body, ce, cv)
            this.instrs[this.wc++] = {tag: 'POP'}
            this.instrs[this.wc++] = {tag: 'GOTO', addr: loop_start}
            jump_on_false_instruction.addr = this.wc
            this.instrs[this.wc++] = {tag: 'LDC', val: undefined}
        },
    app:
        (comp, ce, cv) => {
            this.compile(comp.fun, ce, cv)
            let new_cv = RustCompileTimeEnvironment.compile_time_variable_properties_extend({}, cv)
            let frame_index = new_cv.length - 1

            for (let i = 0; i < comp.args.length; i++) {
                let arg = comp.args[i]
                this.compile(arg, ce, cv)
                
                new_cv[frame_index][i] = {mut: true, type: arg.type, borrow_read: 0, borrow_write: 0, owner: [frame_index, i], can_read: true, can_write: true}
                this.update_all_owner_borrow_relationships(arg, [frame_index, i], ce, new_cv)
            }
            this.instrs[this.wc++] = {tag: 'CALL', arity: comp.args.length}
            this.release_borrowed_variables(new_cv)
        },
    assmt:
        // store precomputed position info in ASSIGN instruction
        (comp, ce, cv) => {
            let compile_time_position = RustCompileTimeEnvironment.compile_time_environment_position(
                ce, comp.sym)
            if (!cv[compile_time_position[0]][comp.sym].mut) {
                throw new Error(`Trying to modify immutable variable ${comp.sym}`)
            }

            this.compile(comp.expr, ce, cv)
            this.update_all_owner_borrow_relationships(comp.expr, [compile_time_position[0], comp.sym], ce, cv)
            this.instrs[this.wc++] = {tag: 'ASSIGN',
                            pos: compile_time_position}
        },
    lam:
        (comp, ce, cv) => {
            this.instrs[this.wc++] = {tag: 'LDF',
                            arity: comp.prms.length,
                            addr: this.wc + 1};
            // jump over the body of the lambda expression
            const goto_instruction = {tag: 'GOTO', addr: undefined}
            this.instrs[this.wc++] = goto_instruction
            // extend compile-time environment
            let new_cv = [...cv]
            let new_env = [...ce]
            for (let i = 2; i < new_cv.length; i++) {
                new_cv[i] = Object.fromEntries(Object.entries(new_cv[i])
                    .filter(([var_name, var_properties]) => (var_properties as { type: string }).type === "function"))
                new_env[i] = new_env[i].filter(var_name => var_name in new_cv[i])
            }

            let new_cv_frame = {}
            for (let i = 0; i < comp.prms.length; i++) {
                let prm = comp.prms[i]
                let owner = [new_cv.length, prm.sym]
                if (prm.borrowed) {
                    owner = [-1, -1]
                }
                new_cv_frame[prm.sym] = {mut: prm.mut, type: prm.type, borrow_read: 0, borrow_write: 0, owner: owner, can_read: true, can_write: prm.mut}
            }
            new_cv = RustCompileTimeEnvironment.compile_time_variable_properties_extend(new_cv_frame, cv)
            new_env = RustCompileTimeEnvironment.compile_time_environment_extend(
                comp.prms.map(prm => prm.sym), new_env)
                
            this.compile(comp.body, new_env, new_cv)
            if (!comp.body.valueProducing) {
                this.instrs[this.wc++] = {tag: 'LDC', val: undefined}
            }
            this.instrs[this.wc++] = {tag: 'RESET'}
            goto_instruction.addr = this.wc;
        },
    block:
        (comp, ce, cv) => {
            const [locals, locals_properties] = this.scan_for_locals(comp.body)
            this.instrs[this.wc++] = {tag: 'ENTER_SCOPE', num: locals.length}
            // extend compile-time environment
            let new_env: string[][] = RustCompileTimeEnvironment.compile_time_environment_extend(
                locals, ce)
            let new_cv: any[] = RustCompileTimeEnvironment.compile_time_variable_properties_extend(locals_properties, cv)
            for (let i = 0; i < locals.length; i++) {
                let frame_number = new_cv.length-1
                let symbol = new_env[frame_number][i]
                new_cv[frame_number][symbol].owner = [frame_number, locals[i]]
            }
            this.compile_sequence(comp.body,
                    comp.valueProducing,
                    new_env, new_cv)
            this.instrs[this.wc++] = {tag: 'EXIT_SCOPE'}
            this.release_borrowed_variables(new_cv)
        },
    let:
        (comp, ce, cv) => {
            this.compile(comp.expr, ce, cv)
            let pos = RustCompileTimeEnvironment.compile_time_environment_position(
                ce, comp.sym)
            this.update_all_owner_borrow_relationships(comp.expr, [pos[0], comp.sym], ce, cv)
            this.instrs[this.wc++] = {tag: 'LET',
                            pos: pos}
        },
    ret:
        (comp, ce, cv) => {
            if (comp.expr === null) {
                this.instrs[this.wc++] = {tag: 'RESET'}
                return
            }
            this.compile(comp.expr, ce, cv)
            if (comp.expr.tag === 'app') {
                // tail call: turn CALL into TAILCALL
                this.instrs[this.wc - 1].tag = 'TAIL_CALL'
            } else {
                this.instrs[this.wc++] = {tag: 'RESET'}
            }
        },
    fun:
        (comp, ce, cv) => {
            this.compile(
                {tag:  'let',
                 sym:  comp.sym,
                 type: "function",
                 mut: false,
                 expr: {tag: 'lam',
                        prms: comp.prms,
                        body: comp.body,
                        retType: comp.retType}},
                ce, cv)
        },
    empty:
        (comp, ce, cv) => {}
    }

    // compile component into instruction array instrs,
    // starting at wc (write counter)
    compile(comp: any, ce: string[][], cv: any[]): any[] {
        this.compile_comp[comp.tag](comp, ce, cv)
        return this.instrs
    }

    // compile program into instruction array instrs,
    // after initializing wc and instrs
    compile_program(program: any): any[] {
        this.wc = 0
        this.instrs = []
        this.compile(program, RustCompileTimeEnvironment.global_compile_environment, RustCompileTimeEnvironment.global_variable_properties)
        this.instrs[this.wc] = {tag: 'DONE'}
        return this.instrs
    }
}
