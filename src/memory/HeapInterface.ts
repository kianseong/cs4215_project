export interface HeapInterface {

    Undefined: number

    Unassigned: number

    True: number

    False: number

    display(): void    

    initialise_empty_heap(): HeapInterface

    get_size(address: number): number

    heap_allocate_Pair(head: number, tail: number): number

    heap_get_child(address: number, childIndex: number): number

    heap_set_child(address: number, childIndex: number, value: number): void

    heap_allocate_Frame(size: number): number

    heap_allocate_Blockframe(builtin_id: number): number

    heap_allocate_Builtin(builtin_id: number): number

    heap_allocate_Closure(arity: number, address: number, env: number): number

    heap_allocate_Number(num: number): number

    heap_allocate_Callframe(env: number, PC: number): number

    heap_allocate_Environment(number_of_frames: number): number

    address_to_JS_value(address: number): any

    JS_value_to_address(value: any): number

    heap_Environment_extend(frame_address: number, env: number): number

    heap_Environment_display(env_address: number): void

    heap_get_Blockframe_environment(address: number): number

    heap_get_Environment_value(env: number, index: number): number

    heap_set_Environment_value(env: number, index: number, val: number)

    heap_get_Builtin_id(address: number): number

    heap_get_Closure_pc(address: number): number

    heap_get_Closure_environment(address: number): number

    heap_get_Callframe_pc(address: number): number

    heap_get_Callframe_environment(address: number): number

    is_Pair(address: number): boolean

    is_Null(address: number): boolean

    is_True(address: number): boolean

    is_Unassigned(address: number): boolean

    is_Builtin(address: number): boolean

    is_Callframe(address: number): boolean

    is_Number(address: number): boolean

    /**
     * Please help to initialise free!
     * sth liddis in initialise machine
     * heap_make(this.heap_size)
        // initialize free list:
        // every free node carries the address
        // of the next free node as its first word
        let i = 0
        for (i = 0; i <= this.heap_size - this.node_size; i = i + this.node_size) {
            heap_set(i, i + this.node_size)
        }
        // the empty free list is represented by -1
        heap_set(i - this.node_size, -1)
        free = 0
     */

    allocate_literal_values()

    // Array methods
    heap_allocate_Array(size: number): number
    heap_get_Array_size(address: number): number
    heap_get_Array_element(address: number, index: number): number
    heap_set_Array_element(address: number, index: number, value: number): void
    is_Array(address: number): boolean
}
