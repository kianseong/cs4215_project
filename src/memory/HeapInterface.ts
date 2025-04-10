export interface HeapInterface {

    heap_allocate_Pair?(head: number, tail: number): number

    heap_get_child?(address: number, childIndex: number): number

    heap_set_child?(address: number, childIndex: number, value: number): void

    address_to_JS_value?(address: number): any

    is_Pair?(address: number): boolean

    is_Null?(address: number): boolean

}