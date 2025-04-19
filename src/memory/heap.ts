import { HeapInterface } from "./HeapInterface";

export class Heap implements HeapInterface {
    // Constants
    private static WORD_SIZE: number = 2 ** 3;
    private static HEAP_SIZE: number = 2 ** 16;

    // Offsets
    private size_offset: number = 1;

    // Memory
    private buffer: ArrayBuffer;
    private heap: DataView;
    private free: number;

    // Public predefined values
    public Undefined: number;
    public Unassigned: number;
    public True: number;
    public False: number;

    // Tags
    private True_tag = 1;
    private False_tag = 2;
    private Pair_tag = 3;
    private Number_tag = 4;
    private Frame_tag = 5;
    private Blockframe_tag = 6;
    private Builtin_tag = 7;
    private Closure_tag = 8;
    private Callframe_tag = 9;
    private Environment_tag = 10;
    private Null_tag = 11;
    private Unassigned_tag = 12;
    private Undefined_tag = 13;

    // Initialization
    public initialise_empty_heap(): HeapInterface {
        this.buffer = new ArrayBuffer(Heap.HEAP_SIZE);
        this.heap = new DataView(this.buffer);
        this.free = 0;
        return this;
    }

    public allocate_literal_values() {
        this.Undefined = this.allocate(this.Undefined, 1);
        this.Unassigned = this.allocate(this.Unassigned, 1);
        this.True = this.allocate(this.True_tag, 1);
        this.False = this.allocate(this.False_tag, 1);
    }

    // Allocation methods
    private allocate(tag: number, size: number) {
        const address = this.free;
        this.free += size;
        this.heap.setInt8(Heap.addressToBytes(address), tag);
        this.heap.setUint16(Heap.addressToBytes(address) + this.size_offset, size);
        return address;
    }

    public heap_allocate_Pair(head: number, tail: number): number {
        const pair_address = this.allocate(this.Pair_tag, 3);
        this.heap_set_child(pair_address, 0, head);
        this.heap_set_child(pair_address, 1, tail);
        return pair_address;
    }

    public heap_allocate_Number(num: number): number {
        const num_address = this.allocate(this.Number_tag, 2);
        this.set(num_address + 1, num);
        return num_address;
    }

    public heap_allocate_Frame(size: number): number {
        return this.allocate(this.Frame_tag, size + 1);
    }

    public heap_allocate_Blockframe(builtin_id: number): number {
        const address = this.allocate(this.Blockframe_tag, 2);
        this.set(address + 1, builtin_id);
        return address;
    }

    public heap_allocate_Builtin(builtin_id: number): number {
        const address = this.allocate(this.Builtin_tag, 1);
        this.heap_set_byte_at_offset(address, 1, builtin_id);
        return address;
    }

    public heap_allocate_Closure(arity: number, address: number, env: number): number {
        const closure_address = this.allocate(this.Closure_tag, 2);
        this.heap_set_byte_at_offset(address, 1 , arity);
        this.heap_set_2_bytes_at_offset(closure_address, 2 , address);
        this.set(closure_address + 1, env);
        return closure_address;
    }

    public heap_allocate_Callframe(env: number, PC: number): number {
        const address = this.allocate(this.Callframe_tag, 2);
        this.heap_set_2_bytes_at_offset(address, 2, PC);
        this.set(address + 1, env);
        return address;
    }

    public heap_allocate_Environment(number_of_frames: number): number {
        return this.allocate(this.Environment_tag, number_of_frames + 1);
    }

    // Environment methods
    ALLOCATING = [];
    public heap_Environment_extend(frame_address: number, env: number): number {
        const old_size = this.heap_get_size(env);
        this.ALLOCATING = [...this.ALLOCATING, frame_address, env];
        const new_env = this.heap_allocate_Environment(old_size);
        this.ALLOCATING = [];
        let i: number;
        for (i = 0; i < old_size - 1; i++) {
            this.heap_set_child(new_env, i, this.heap_get_child(env, i));
        }
        this.heap_set_child(new_env, i, frame_address);
        return new_env;
    }

    public heap_get_Environment_value(env: number, index: number): number {
        const frame_index = this.heap_get_child(index, 0);
        const value_index = this.heap_get_child(index, 1);
        const frame_address = this.heap_get_child(env, frame_index);
        return this.heap_get_child(frame_address, value_index);
    }

    public heap_set_Environment_value(env: number, index: number, val: number) {
        const frame_index = this.heap_get_child(index, 0);
        const value_index = this.heap_get_child(index, 1);
        const frame_address = this.heap_get_child(env, frame_index);
        this.heap_set_child(frame_address, value_index, val);
    }

    public heap_get_Blockframe_environment(address: number): number {
        return this.heap_get_child(address, 0);
    }

    // Value conversion
    public address_to_JS_value(address: number) {
        if (this.is_Boolean(address)) {
            return this.is_True(address) ? true : false;
        } else if (this.is_Number(address)) {
            return this.get(address + 1);
        } else if (this.is_Undefined(address)) {
            return undefined;
        } else if (this.is_Unassigned(address)) {
            return "<unassigned>";
        } else if (this.is_Null(address)) {
            return null;
        } else if (this.is_Pair(address)) {
            return [
                this.address_to_JS_value(this.heap_get_child(address, 0)),
                this.address_to_JS_value(this.heap_get_child(address, 1))
            ];
        } else if (this.is_Closure(address)) {
            return "<closure>";
        } else if (this.is_Builtin(address)) {
            return "<builtin>";
        } else {
            return undefined;
        }
    }

    public JS_value_to_address(value: any): any {
        if (typeof value === "boolean") {
            return value ? this.True : this.False;
        } else if (typeof value === "number") {
            return this.heap_allocate_Number(value);
        } else if (value === undefined) {
            return undefined;
        } else if (value === null) {
            return null;
        } else if (Array.isArray(value) && value.length === 2) {
            return this.heap_allocate_Pair(value[0], value[1]);
        } else {
            return undefined
        }
    }

    // Getters
    public get(address: number): number {
        return this.heap.getFloat64(Heap.addressToBytes(address));
    }

    public heap_get_tag(address: number) {
        return this.heap.getInt8(Heap.addressToBytes(address));
    }

    private heap_get_size(address: number) {
        return this.heap.getUint16(Heap.addressToBytes(address) + this.size_offset);
    }

    public heap_get_child(address: number, childIndex: number): number {
        return this.get(address + 1 + childIndex);
    }

    public heap_get_byte_at_offset(address: number, offset: number): number {
        return this.heap.getUint8(Heap.addressToBytes(address) + offset);
    }

    public heap_get_2_bytes_at_offset(address: number, offset: number): number {
        return this.heap.getUint16(Heap.addressToBytes(address) + offset);
    }

    public heap_get_Builtin_id(address: number): number {
        return this.heap_get_byte_at_offset(address , 1);
    }

    public heap_get_Closure_pc(address: number): number {
        return this.heap_get_2_bytes_at_offset(address, 2);
    }

    public heap_get_Closure_environment(address: number): number {
        return this.heap_get_child(address, 0);
    }

    public heap_get_Callframe_pc(address: number): number {
        return this.heap_get_2_bytes_at_offset(address, 2);
    }

    public heap_get_Callframe_environment(address: number): number {
        return this.heap_get_child(address, 0);
    }

    // Setters
    public set(address: number, value: number): void {
        this.heap.setFloat64(Heap.addressToBytes(address), value);
    }

    public heap_set_child(address: number, childIndex: number, value: number): void {
        this.set(address + 1 + childIndex, value);
    }

    public heap_set_byte_at_offset(address: number, offset: number, value: number) {
        this.heap.setUint8(Heap.addressToBytes(address) + offset, value);
    }

    public heap_set_2_bytes_at_offset(address: number, offset: number, value: number) {
        this.heap.setUint16(Heap.addressToBytes(address) + offset, value);
    }

    // Type checkers
    public is_Boolean(address: number) {
        return this.is_True(address) || this.is_False(address);
    }

    public is_True(address: number): boolean {
        return this.heap_get_tag(address) === this.True_tag;
    }

    public is_False(address: number): boolean {
        return this.heap_get_tag(address) === this.False_tag;
    }

    public is_Number(address: number): boolean {
        return this.heap_get_tag(address) === this.Number_tag;
    }

    public is_Pair(address: number): boolean {
        return this.heap_get_tag(address) === this.Pair_tag;
    }

    public is_Null(address: number): boolean {
        return this.heap_get_tag(address) === this.Null_tag;
    }

    public is_Unassigned(address: number): boolean {
        return this.heap_get_tag(address) === this.Unassigned_tag;
    }

    public is_Undefined(address: number): boolean {
        return this.heap_get_tag(address) === this.Undefined_tag;
    }

    public is_Builtin(address: number): boolean {
        return this.heap_get_tag(address) === this.Builtin_tag;
    }

    public is_Closure(address: number): boolean {
        return this.heap_get_tag(address) === this.Closure_tag;
    }

    public is_Callframe(address: number): boolean {
        return this.heap_get_tag(address) === this.Callframe_tag;
    }

    // Utils
    private static addressToBytes(address: number) {
        return address * this.WORD_SIZE;
    }
}
