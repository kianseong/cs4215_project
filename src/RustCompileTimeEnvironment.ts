import { HeapInterface } from './memory/HeapInterface';

export class RustCompileTimeEnvironment {
    
    // in this machine, the builtins take their
    // arguments directly from the operand stack,
    // to save the creation of an intermediate 
    // argument array
    private static readonly builtin_implementation = {
        display       : (OS, heap: HeapInterface) => {
                            const address = OS.pop()
                            console.log(heap.address_to_JS_value(address))
                            return address
                        },
        panic         : (OS, heap: HeapInterface) => {throw new Error(heap.address_to_JS_value(OS.pop()))},
        pair          : (OS, heap: HeapInterface) => {
                            const tl = OS.pop()
                            const hd = OS.pop()
                            return heap.heap_allocate_Pair(hd, tl)
                        },
        is_pair       : (OS, heap: HeapInterface) => heap.is_Pair(OS.pop()) ? true : false,
        head          : (OS, heap: HeapInterface) => heap.heap_get_child(OS.pop(), 0),
        tail          : (OS, heap: HeapInterface) => heap.heap_get_child(OS.pop(), 1),
        is_null       : (OS, heap: HeapInterface) => heap.is_Null(OS.pop()) ? true : false,
        set_head      : (OS, heap: HeapInterface) => {
                            const val = OS.pop()
                            const p = OS.pop()
                            heap.heap_set_child(p, 0, val)
                        },
        set_tail      : (OS, heap: HeapInterface) => {
                            const val = OS.pop()
                            const p = OS.pop()
                            heap.heap_set_child(p, 1, val)
                        }
    }
    

    private static readonly constants = {
        undefined     : undefined,
        math_E        : Math.E,
        math_LN10     : Math.LN10,
        math_LN2      : Math.LN2,
        math_LOG10E   : Math.LOG10E,
        math_LOG2E    : Math.LOG2E,
        math_PI       : Math.PI,
        math_SQRT1_2  : Math.SQRT1_2,
        math_SQRT2    : Math.SQRT2 
    }

    static compile_time_environment_extend(vs, e) {
        //  make shallow copy of e
        return [...e].push(...vs)
    }

    static compile_time_environment_position(env, x) {
        let frame_index = env.length
        while (this.value_index(env[--frame_index], x) === -1) {}
        return [frame_index, 
                this.value_index(env[frame_index], x)]
    }
    
    static value_index(frame, x) {
      for (let i = 0; i < frame.length; i++) {
        if (frame[i] === x) return i
      }
      return -1;
    }

    static get_global_compile_environment() {
        let builtins = {}
        let builtin_array = []
        let i = 0
        for (const key in RustCompileTimeEnvironment.builtin_implementation) {
            builtins[key] = 
                { tag:   'BUILTIN', 
                    id:    i,
                    arity: 0
                }
            builtin_array[i++] = RustCompileTimeEnvironment.builtin_implementation[key]
        }
        // compile-time frames only need synbols (keys), no values
        let builtin_compile_frame = Object.keys(builtins)
        let constant_compile_frame = Object.keys(RustCompileTimeEnvironment.constants)
        let global_compile_environment = [builtin_compile_frame, constant_compile_frame]
        return global_compile_environment
    }
    

}