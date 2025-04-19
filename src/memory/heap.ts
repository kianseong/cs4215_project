import { HeapInterface } from "./HeapInterface";

export enum HeapTag {
    True = 1,
    False = 2,
    Pair = 3,
    Number = 4,
    Frame = 5,
    Blockframe = 6,
    Builtin = 7,
    Closure = 8,
    Callframe = 9,
    Environment = 10,
    Null = 11,
    Unassigned = 12,
    Undefined = 13,
    Free = 14 // New tag for free blocks
}

export class Heap implements HeapInterface {
    // Constants
    private static WORD_SIZE: number = 2 ** 3;
    private static HEAP_SIZE: number = 2 ** 16;
    private static MIN_BLOCK_SIZE: number = 2; // Minimum block size in words

    // Offsets
    private size_offset: number = 1;
    private next_offset: number = 2; // Offset for next pointer in free blocks

    // Memory
    private buffer: ArrayBuffer;
    private heap: DataView;
    private free_list: number; // Points to the first free block

    // Public predefined values
    public Undefined: number;
    public Unassigned: number;
    public True: number;
    public False: number;

    // Initialization
    public initialise_empty_heap(): HeapInterface {
        this.buffer = new ArrayBuffer(Heap.HEAP_SIZE);
        this.heap = new DataView(this.buffer);
        
        // Initialize the entire heap as one free block
        const total_words = Heap.HEAP_SIZE / Heap.WORD_SIZE;
        this.free_list = 0;
        this.set_tag(this.free_list, HeapTag.Free);
        this.set_size(this.free_list, total_words);
        this.set_next(this.free_list, -1); // -1 indicates end of free list
        
        return this;
    }

    public allocate_literal_values() {
        this.Undefined = this.allocate(HeapTag.Undefined, 1);
        this.Unassigned = this.allocate(HeapTag.Unassigned, 1);
        this.True = this.allocate(HeapTag.True, 1);
        this.False = this.allocate(HeapTag.False, 1);
    }

    // New methods for free list management
    private set_tag(address: number, tag: HeapTag): void {
        if (address < 0 || address >= Heap.HEAP_SIZE / Heap.WORD_SIZE) {
            throw new Error("Heap out of memory: No space available for allocation.");
        }
        this.heap.setInt8(Heap.addressToBytes(address), tag);
    }

    private set_size(address: number, size: number): void {
        this.heap.setUint16(Heap.addressToBytes(address) + this.size_offset, size);
    }

    private set_next(address: number, next: number): void {
        this.heap.setUint16(Heap.addressToBytes(address) + this.next_offset, next);
    }

    private get_next(address: number): number {
        return this.heap.getUint16(Heap.addressToBytes(address) + this.next_offset);
    }

    public get_size(address: number): number {
        const size = this.heap.getUint16(Heap.addressToBytes(address) + this.size_offset);
        return size;
    }

    private get_tag(address: number): HeapTag {
        return this.heap.getInt8(Heap.addressToBytes(address)) as HeapTag;
    }

    // New allocation method using free list
    public reserve(size: number, alignment: number): number {
        if (size < Heap.MIN_BLOCK_SIZE) {
            size = Heap.MIN_BLOCK_SIZE;
        }

        let prev = -1;
        let current = this.free_list;

        while (current !== -1) {
            const block_size = this.get_size(current);
            
            if (block_size >= size) {
                // Found a suitable block
                if (block_size > size + Heap.MIN_BLOCK_SIZE) {
                    // Split the block
                    const new_block = current + size;
                    this.set_tag(new_block, HeapTag.Free);
                    this.set_size(new_block, block_size - size);
                    this.set_next(new_block, this.get_next(current));
                    
                    this.set_size(current, size);
                    this.set_next(current, new_block);
                } else {
                    // Use the entire block
                    this.set_next(current, this.get_next(current));
                }

                // Remove from free list
                if (prev === -1) {
                    this.free_list = this.get_next(current);
                } else {
                    this.set_next(prev, this.get_next(current));
                }

                // Set the size before returning
                this.set_size(current, size);
                return current;
            }

            prev = current;
            current = this.get_next(current);
        }

        throw new Error("Heap out of memory: No space available for allocation.");
    }

    // New deallocation method
    public deallocate(address: number): void {
        if (address < 0 || address >= Heap.HEAP_SIZE / Heap.WORD_SIZE) {
            return; // Invalid address, silently ignore
        }

        const size = this.get_size(address);
        this.set_tag(address, HeapTag.Free);

        // Find insertion point in free list
        let prev = -1;
        let current = this.free_list;

        while (current !== -1 && current < address) {
            prev = current;
            current = this.get_next(current);
        }

        // Insert into free list
        if (prev === -1) {
            this.free_list = address;
        } else {
            this.set_next(prev, address);
        }
        this.set_next(address, current);

        // Try to merge with next block if adjacent
        if (current !== -1 && address + size === current) {
            this.set_size(address, size + this.get_size(current));
            this.set_next(address, this.get_next(current));
        }

        // Try to merge with previous block if adjacent
        if (prev !== -1 && prev + this.get_size(prev) === address) {
            this.set_size(prev, this.get_size(prev) + size);
            this.set_next(prev, this.get_next(address));
        }
    }

    // Modified allocation method to use reserve
    private allocate(tag: HeapTag, size: number): number {
        const address = this.reserve(size, 0);
        this.set_tag(address, tag);
        return address;
    }

    public heap_allocate_Pair(head: number, tail: number): number {
        const pair_address = this.allocate(HeapTag.Pair, 3);
        this.heap_set_child(pair_address, 0, head);
        this.heap_set_child(pair_address, 1, tail);
        return pair_address;
    }

    public heap_allocate_Number(num: number): number {
        const num_address = this.allocate(HeapTag.Number, 2);
        this.set(num_address + 1, num);
        return num_address;
    }

    public heap_allocate_Frame(number_of_values: number): number {
        return this.allocate(HeapTag.Frame, number_of_values + 1);
    }

    public heap_allocate_Blockframe(builtin_id: number): number {
        const address = this.allocate(HeapTag.Blockframe, 2);
        this.set(address + 1, builtin_id);
        return address;
    }

    public heap_allocate_Builtin(builtin_id: number): number {
        const address = this.allocate(HeapTag.Builtin, 1);
        this.heap_set_byte_at_offset(address, 1, builtin_id);
        return address;
    }

    public heap_allocate_Closure(arity: number, address: number, env: number): number {
        const closure_address = this.allocate(HeapTag.Closure, 2);
        this.heap_set_byte_at_offset(address, 1 , arity);
        this.heap_set_2_bytes_at_offset(closure_address, 2 , address);
        this.set(closure_address + 1, env);
        return closure_address;
    }

    public heap_allocate_Callframe(env: number, PC: number): number {
        const address = this.allocate(HeapTag.Callframe, 2);
        this.heap_set_2_bytes_at_offset(address, 2, PC);
        this.set(address + 1, env);
        return address;
    }

    public heap_allocate_Environment(number_of_frames: number): number {
        return this.allocate(HeapTag.Environment, number_of_frames + 1);
    }

    // Environment methods
    ALLOCATING = [];
    public heap_Environment_extend(frame_address: number, env: number): number {
        const old_size = this.get_size(env);
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

    public display(): void {
        console.log("Heap contents:");
        for (let i = 0; i < this.free_list; i++) {
            const tag = this.heap_get_tag(i);
            const value = this.address_to_JS_value(i);
            console.log(`Address ${i}: ${HeapTag[tag]} = ${value}`);
        }
    }

    public heap_Environment_display(env_address: number): void {
        const size = this.heap_get_number_of_children(env_address)
        console.log("", "Environment:")
        console.log(size, "environment size:")
        for (let i = 0; i < size; i++) {
            console.log(i, "frame index:")
            const frame = this.heap_get_child(env_address, i)
            this.heap_Frame_display(frame)
        }
    }

    private heap_get_number_of_children(address: number) {
        return this.heap_get_tag(address) === HeapTag.Number
            ? 0
            : this.get_size(address) - 1
    }

    private heap_Frame_display(address: number) {
        console.log("", "Frame:")
        const size = this.heap_get_number_of_children(address)
        console.log(size, "frame size:")
        for (let i = 0; i < size; i++) {
            console.log(i, "value address:")
            const value = this.heap_get_child(address, i)
            console.log(value, "value:")
        }
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
            return "unassigned";
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
            return this.heap_get_byte_at_offset(address, 6)
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

    public heap_get_tag(address: number): HeapTag {
        return this.heap.getInt8(Heap.addressToBytes(address)) as HeapTag;
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
    public is_Boolean(address: number): boolean {
        const tag = this.heap_get_tag(address);
        return tag === HeapTag.True || tag === HeapTag.False;
    }

    public is_True(address: number): boolean {
        return this.heap_get_tag(address) === HeapTag.True;
    }

    public is_False(address: number): boolean {
        return this.heap_get_tag(address) === HeapTag.False;
    }

    public is_Number(address: number): boolean {
        return this.heap_get_tag(address) === HeapTag.Number;
    }

    public is_Pair(address: number): boolean {
        return this.heap_get_tag(address) === HeapTag.Pair;
    }

    public is_Null(address: number): boolean {
        return this.heap_get_tag(address) === HeapTag.Null;
    }

    public is_Unassigned(address: number): boolean {
        return this.heap_get_tag(address) === HeapTag.Unassigned;
    }

    public is_Undefined(address: number): boolean {
        return this.heap_get_tag(address) === HeapTag.Undefined;
    }

    public is_Builtin(address: number): boolean {
        return this.heap_get_tag(address) === HeapTag.Builtin;
    }

    public is_Closure(address: number): boolean {
        return this.heap_get_tag(address) === HeapTag.Closure;
    }

    public is_Callframe(address: number): boolean {
        return this.heap_get_tag(address) === HeapTag.Callframe;
    }

    // Utils
    private static addressToBytes(address: number) {
        return address * this.WORD_SIZE;
    }
}
