import { RustCompileTimeEnvironment } from "./RustCompileTimeEnvironment"

export class RustCompiler {

    private wc: number
    private instrs: any[]

    RustCompiler() {
        this.wc = 0
        this.instrs = []
    }

    scan_for_locals(comp: any): string[] {
        return comp.tag === 'block'
        ? comp.stmts.reduce((acc, x) => 
                            acc.concat(this.scan_for_locals(x)),
                            [])
        : ['let', 'fun'].includes(comp.tag)
        ? [comp.sym]
        : []
    }
    
    compile_sequence(seq: any, value_producing: boolean, ce: string[][]) {
        if (seq.length === 0)
            return this.instrs[this.wc++] = {tag: "LDC", val: undefined}
        let first = true
        for (let comp of seq) {
            first ? first = false
                  : this.instrs[this.wc++] = {tag: 'POP'}
            this.compile(comp, ce)
        }
        if (!value_producing) {
            this.instrs[this.wc++] = {tag: 'POP'}
        }
    }
        
    private compile_comp: { [key: string]: any } = {
    lit:
        (comp, ce) => {
            this.instrs[this.wc++] = { tag: "LDC", 
                             val: comp.val
            }
        },
    nam:
        // store precomputed position information in LD instruction
        (comp, ce) => {
            this.instrs[this.wc++] = { tag: "LD", 
                             sym: comp.sym,
                             pos: RustCompileTimeEnvironment.compile_time_environment_position(
                                      ce, comp.sym)
                            }
        },
    unop:
        (comp, ce) => {
            this.compile(comp.frst, ce)
            this.instrs[this.wc++] = {tag: 'UNOP', sym: comp.sym}
        },
    binop:
        (comp, ce) => {
            this.compile(comp.frst, ce)
            this.compile(comp.scnd, ce)
            this.instrs[this.wc++] = {tag: 'BINOP', sym: comp.sym}
        },
    cond: 
        (comp, ce) => {
            this.compile(comp.pred, ce)
            const jump_on_false_instruction = {tag: 'JOF', addr: undefined}
            this.instrs[this.wc++] = jump_on_false_instruction
            this.compile(comp.cons, ce)
            const goto_instruction = { tag: 'GOTO', addr: undefined}
            this.instrs[this.wc++] = goto_instruction;
            const alternative_address = this.wc;
            jump_on_false_instruction.addr = alternative_address;
            this.compile(comp.alt, ce)
            goto_instruction.addr = this.wc
        },
    while:
        (comp, ce) => {
            const loop_start = this.wc
            this.compile(comp.pred, ce)
            const jump_on_false_instruction = {tag: 'JOF', addr: undefined}
            this.instrs[this.wc++] = jump_on_false_instruction
            this.compile(comp.body, ce)
            this.instrs[this.wc++] = {tag: 'POP'}
            this.instrs[this.wc++] = {tag: 'GOTO', addr: loop_start}
            jump_on_false_instruction.addr = this.wc
            this.instrs[this.wc++] = {tag: 'LDC', val: undefined}
        }, 
    app:
        (comp, ce) => {
            this.compile(comp.fun, ce)
            for (let arg of comp.args) {
                this.compile(arg, ce)
            }
            this.instrs[this.wc++] = {tag: 'CALL', arity: comp.args.length}
        },
    assmt:
        // store precomputed position info in ASSIGN instruction
        (comp, ce) => {
            this.compile(comp.expr, ce)
            this.instrs[this.wc++] = {tag: 'ASSIGN', 
                            pos: RustCompileTimeEnvironment.compile_time_environment_position(
                                     ce, comp.sym)}
        },
    lam:
        (comp, ce) => {
            this.instrs[this.wc++] = {tag: 'LDF', 
                            arity: comp.prms.length, 
                            addr: this.wc + 1};
            // jump over the body of the lambda expression
            const goto_instruction = {tag: 'GOTO', addr: undefined}
            this.instrs[this.wc++] = goto_instruction
            // extend compile-time environment
            this.compile(comp.body,
                RustCompileTimeEnvironment.compile_time_environment_extend(
                        comp.prms, ce))
            this.instrs[this.wc++] = {tag: 'LDC', val: undefined}
            this.instrs[this.wc++] = {tag: 'RESET'}
            goto_instruction.addr = this.wc;
        },
    blk:
        (comp, ce) => {
            const locals = this.scan_for_locals(comp.body)
            this.instrs[this.wc++] = {tag: 'ENTER_SCOPE', num: locals.length}
            // extend compile-time environment
            let new_env: string[][] = RustCompileTimeEnvironment.compile_time_environment_extend(
                locals, ce)
            this.compile_sequence(comp.body,
                    comp.valueProducing,
                    new_env)     
            this.instrs[this.wc++] = {tag: 'EXIT_SCOPE'}
        },
    let: 
        (comp, ce) => {
            this.compile(comp.expr, ce)
            this.instrs[this.wc++] = {tag: 'LET', 
                            pos: RustCompileTimeEnvironment.compile_time_environment_position(
                                     ce, comp.sym)}
        },
    ret:
        (comp, ce) => {
            this.compile(comp.expr, ce)
            if (comp.expr.tag === 'app') {
                // tail call: turn CALL into TAILCALL
                this.instrs[this.wc - 1].tag = 'TAIL_CALL'
            } else {
                this.instrs[this.wc++] = {tag: 'RESET'}
            }
        },
    fun:
        (comp, ce) => {
            this.compile(
                {tag:  'let',
                 sym:  comp.sym,
                 type: "function",
                 mut: false,
                 expr: {tag: 'lam', 
                        prms: comp.prms, 
                        body: comp.body,
                        retType: comp.retType}},
                ce)
        }
    }
    
    // compile component into instruction array instrs, 
    // starting at wc (write counter)
    compile(comp: any, ce: string[][]): any[] {
        this.compile_comp[comp.tag](comp, ce)
        return this.instrs
    }
    
    // compile program into instruction array instrs, 
    // after initializing wc and instrs
    compile_program(program: any): any[] {
        this.wc = 0
        this.instrs = []    
        this.compile(program, RustCompileTimeEnvironment.get_global_compile_environment())
        this.instrs[this.wc] = {tag: 'DONE'}
        return this.instrs
    }
}