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
          console.log(comp)
            if (['let', 'fun'].includes(comp.tag)) {
                locals.push(comp.sym)
                if (comp.sym in locals_properties) {
                    throw new Error('Repeated variable declaration')
                }
                locals_properties[comp.sym] = {mut: comp.mut, type: comp.type, can_read: true, can_write: true}
            }
        }
        return [locals, locals_properties]
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
            this.instrs[this.wc++] = { tag: "LD",
                             sym: comp.sym,
                             pos: RustCompileTimeEnvironment.compile_time_environment_position(
                                      ce, comp.sym)
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
            for (let arg of comp.args) {
                this.compile(arg, ce, cv)
            }
            this.instrs[this.wc++] = {tag: 'CALL', arity: comp.args.length}
        },
    assmt:
        // store precomputed position info in ASSIGN instruction
        (comp, ce, cv) => {
            this.compile(comp.expr, ce, cv)
            let compile_time_position = RustCompileTimeEnvironment.compile_time_environment_position(
                ce, comp.sym)
            if (!RustCompileTimeEnvironment.compile_time_variable_property(cv, compile_time_position[0], comp.sym).mut) {
                throw new Error(`Trying to modify immutable variable ${comp.sym}`)
            }
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
            let new_cv_frame = {}
            for (let prm of comp.prms) {
                new_cv_frame[prm.sym] = {mut: true, type: prm.type, can_read: true, can_write: true}
            }
            let new_cv = [...cv]
            console.log(new_cv)
            let new_env = [...ce]
            for (let i = 2; i < new_cv.length; i++) {
                new_cv[i] = Object.fromEntries(Object.entries(new_cv[i]).filter(([var_name, var_properties]) => (var_properties as { type: string }).type === "function"))
                new_env[i] = new_env[i].filter(var_name => var_name in new_cv[i])
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
            this.compile_sequence(comp.body,
                    comp.valueProducing,
                    new_env, new_cv)
            this.instrs[this.wc++] = {tag: 'EXIT_SCOPE'}
        },
    let:
        (comp, ce, cv) => {
            this.compile(comp.expr, ce, cv)
            this.instrs[this.wc++] = {tag: 'LET',
                            pos: RustCompileTimeEnvironment.compile_time_environment_position(
                                     ce, comp.sym)}
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
        (comp, ce, cv) => {},
    arr_lit:
        (comp, ce, cv) => {
            // First compile all array elements
            for (let elem of comp.elems) {
                this.compile(elem, ce, cv)
            }
            // Create array with the compiled elements
            this.instrs[this.wc++] = {tag: 'ARRAY', size: comp.elems.length}
        },
    arr_index:
        (comp, ce, cv) => {
            this.compile({tag: 'nam', sym: comp.arr}, ce, cv)
            this.compile(comp.index, ce, cv)
            this.instrs[this.wc++] = {tag: 'ARRAY_INDEX' }
        },
    arr_mod:
        (comp, ce, cv) => {
            this.compile({tag: 'nam', sym: comp.arr}, ce, cv)
            this.compile(comp.index, ce, cv)
            this.compile(comp.expr, ce, cv)
            this.instrs[this.wc++] = {tag: 'ARRAY_MOD' }
        }
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
