import { HeapInterface } from './memory/HeapInterface';
import { Heap } from './memory/heap';
import { RustCompileTimeEnvironment } from "./RustCompileTimeEnvironment";

export class RustVirtualMachine {

    private heap: HeapInterface

        // machine registers
    private OS: any[]   // JS array (stack) of words (Addresses,
             //        word-encoded literals, numbers)
    private PC: number   // JS number
    private E: number    // heap Address
    private RTS: number[]  // JS array (stack) of Addresses

    constructor() {
        this.heap = new Heap()
    }

    // set up registers, including free list
    initialize_machine() {
        this.OS = []
        this.PC = 0
        this.RTS = []
        this.heap = this.heap.initialise_empty_heap()
        this.heap.allocate_literal_values()
        const builtins_frame = this.allocate_builtin_frame()
        const constants_frame = this.allocate_constant_frame()
        this.E = this.heap.heap_allocate_Environment(0)
        console.log(`initial env size: ${this.heap.get_size(this.E)}`)
        this.E = this.heap.heap_Environment_extend(builtins_frame, this.E)
        this.E = this.heap.heap_Environment_extend(constants_frame, this.E)
    }

    run(instrs: any[]) {
        //print_code()
        this.initialize_machine()
        while (! (instrs[this.PC].tag === 'DONE')) {
            //heap_display()
            //display(PC, "PC: ")
            //display(instrs[PC].tag, "instr: ")
            //print_OS("\noperands:            ");
            //print_RTS("\nRTS:            ");
            const instr = instrs[this.PC++]
            // console.log(instrs[this.PC].tag, "next instruction: ")
            this.microcode[instr.tag](instr)
        }
        //display(OS, "\nfinal operands:           ")
        //print_OS()
        return this.heap.address_to_JS_value(this.OS.at(-1))
    }

    private static readonly binop_microcode: { [key: string]: any } = {
        '+':   (x, y)   => x + y,
        '*':   (x, y) => x * y,
        '-':   (x, y) => x - y,
        '/':   (x, y) => x / y,
        '%':   (x, y) => x % y,
        '<':   (x, y) => x < y,
        '<=':  (x, y) => x <= y,
        '>=':  (x, y) => x >= y,
        '>':   (x, y) => x > y,
        '==': (x, y) => x === y,
        '!=': (x, y) => x !== y
    }

    // v2 is popped before v1
    private apply_binop(op: string, v2: number, v1: number): number {
        return this.heap.JS_value_to_address(RustVirtualMachine.binop_microcode[op]
            (this.heap.address_to_JS_value(v1),
            this.heap.address_to_JS_value(v2)))
    }

    private static readonly unop_microcode: { [key: string]: any } = {
        '-unary': x => - x,
        '!'     : x => ! x
    }

    private apply_unop(op: string, v: number): number {
        return this.heap.JS_value_to_address(RustVirtualMachine.unop_microcode[op]
            (this.heap.address_to_JS_value(v)))
    }

    private apply_builtin(builtin_id: number) {
        console.log(`apply_builtin: ${builtin_id}`)
        const result: any = RustCompileTimeEnvironment.builtin_array[builtin_id](this.OS, this.heap)
        this.OS.pop() // pop fun
        this.OS.push(result)
    }

    private allocate_builtin_frame(): number {
        const builtin_values: any[] = Object.values(RustCompileTimeEnvironment.builtins)
        const frame_address: number =
            this.heap.heap_allocate_Frame(builtin_values.length)
        for (let i = 0; i < builtin_values.length; i++) {
            const builtin = builtin_values[i];
            this.heap.heap_set_child(
                frame_address,
                i,
                this.heap.heap_allocate_Builtin(builtin.id))
        }
        return frame_address
    }

    private allocate_constant_frame(): number {
        const constant_values = Object.values(RustCompileTimeEnvironment.constants)
        const frame_address =
                this.heap.heap_allocate_Frame(constant_values.length)
        for (let i = 0; i < constant_values.length; i++) {
            const constant_value = constant_values[i];
            if (typeof constant_value === "undefined") {
                this.heap.heap_set_child(frame_address, i, this.heap.Undefined)
            } else {
                this.heap.heap_set_child(
                    frame_address,
                    i,
                    this.heap.heap_allocate_Number(constant_value))
            }
        }
        return frame_address
    }

    // *******
    // machine
    // *******

    private microcode: { [key: string]: any } = {
    LDC:
        instr =>
        this.OS.push(this.heap.JS_value_to_address(instr.val)),
    UNOP:
        instr =>
        this.OS.push(this.apply_unop(instr.sym, this.OS.pop())),
    BINOP:
        instr =>
            this.OS.push(this.apply_binop(instr.sym, this.OS.pop(), this.OS.pop())),
    POP:
        instr =>
            this.OS.pop(),
    JOF:
        instr =>
            this.PC = this.heap.is_True(this.OS.pop()) ? this.PC : instr.addr,
    GOTO:
        instr =>
            this.PC = instr.addr,
    ENTER_SCOPE:
        instr => {
            this.RTS.push(this.heap.heap_allocate_Blockframe(this.E))
            const frame_address = this.heap.heap_allocate_Frame(instr.num)
            this.E = this.heap.heap_Environment_extend(frame_address, this.E)
            for (let i = 0; i < instr.num; i++) {
                this.heap.heap_set_child(frame_address, i, this.heap.Unassigned)
            }
        },
    EXIT_SCOPE:
        instr =>
            this.E = this.heap.heap_get_Blockframe_environment(this.RTS.pop()),
    LD:
        instr => {
            const val = this.heap.heap_get_Environment_value(this.E, instr.pos)
            if (this.heap.is_Unassigned(val))
                throw new Error("access of unassigned variable")
            this.OS.push(val)
        },
    ASSIGN:
        instr =>
            this.heap.heap_set_Environment_value(this.E, instr.pos, this.OS.at(-1)),
    LET:
        instr =>
            this.heap.heap_set_Environment_value(this.E, instr.pos, this.OS.at(-1)),
    LDF:
        instr => {
            const closure_address =
                this.heap.heap_allocate_Closure(
                          instr.arity, instr.addr, this.E)
            this.OS.push(closure_address)
        },
    CALL:
        instr => {
            const arity = instr.arity
            const fun = this.OS[this.OS.length - 1 - arity]
            if (this.heap.is_Builtin(fun)) {
                return this.apply_builtin(this.heap.heap_get_Builtin_id(fun))
            }
            const new_PC = this.heap.heap_get_Closure_pc(fun)
            const new_frame = this.heap.heap_allocate_Frame(arity)
            for (let i = arity - 1; i >= 0; i--) {
                let val = this.OS.pop()
                this.heap.heap_set_child(new_frame, i, val)
            }
            this.OS.pop() // pop fun
            this.RTS.push(this.heap.heap_allocate_Callframe(this.E, this.PC))
            this.E = this.heap.heap_Environment_extend(
                    new_frame,
                    this.heap.heap_get_Closure_environment(fun))
            this.PC = new_PC
        },
    TAIL_CALL:
        instr => {
            const arity = instr.arity
            const fun = this.OS[this.OS.length - 1 - arity]
            if (this.heap.is_Builtin(fun)) {
                return this.apply_builtin(this.heap.heap_get_Builtin_id(fun))
            }
            const new_PC = this.heap.heap_get_Closure_pc(fun)
            const new_frame = this.heap.heap_allocate_Frame(arity)
            for (let i = arity - 1; i >= 0; i--) {
                this.heap.heap_set_child(new_frame, i, this.OS.pop())
            }
            this.OS.pop() // pop fun
            // don't push on RTS here
            this.E = this.heap.heap_Environment_extend(
                    new_frame,
                    this.heap.heap_get_Closure_environment(fun))
            this.PC = new_PC
        },
    RESET:
        instr => {
            // keep popping...
            const top_frame = this.RTS.pop()
            if (this.heap.is_Callframe(top_frame)) {
                // ...until top frame is a call frame
                this.PC = this.heap.heap_get_Callframe_pc(top_frame)
                this.E = this.heap.heap_get_Callframe_environment(top_frame)
            } else {
            this.PC--
            }
        },
    ARRAY:
        instr => {
            const size = instr.size
            const array_address = this.heap.heap_allocate_Array(size)
            // Pop elements from the stack and store them in the array
            for (let i = size - 1; i >= 0; i--) {
                this.heap.heap_set_Array_element(array_address, i, this.OS.pop())
            }
            this.OS.push(array_address)
        },
    ARRAY_INDEX:
        instr => {
            const index = this.heap.address_to_JS_value(this.OS.pop())
            const array = this.OS.pop()
            const element = this.heap.heap_get_Array_element(array, index)
            this.OS.push(element)
        },
    ARRAY_MOD:
        instr => {
            const element = this.OS.pop()
            const index = this.heap.address_to_JS_value(this.OS.pop())
            const array = this.OS.pop()
            
            this.heap.heap_set_Array_element(array, index, element)
            this.OS.push(array)
        }
    }
}
