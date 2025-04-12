import { HeapInterface } from "./HeapInterface";

export class Heap implements HeapInterface {
    public readonly Undefined: number = 0;
    public readonly Unassigned: number = -1;

    private static WORD_SIZE: number = 2 ** 3;
    private static HEAP_SIZE: number = 2 ** 16;
    private static METADATA_SIZE: number = 1;

    private tagOffset: number = 0;
    private sizeOffset: number = 1;

    private buffer: ArrayBuffer;
    private heap: DataView;
    private free: number;
    private freeList: number[];

    private readonly TAG_PAIR = 1;
    private readonly TAG_FRAME = 2;
    private readonly TAG_BLOCKFRAME = 3;
    private readonly TAG_BUILTIN = 4;
    private readonly TAG_CLOSURE = 5;
    private readonly TAG_NUMBER = 6;
    private readonly TAG_CALLFRAME = 7;
    private readonly TAG_ENVIRONMENT = 8;

    public constructor() {
        this.buffer = new ArrayBuffer(Heap.HEAP_SIZE);
        this.heap = new DataView(this.buffer);
        this.free = 0;
        this.freeList = [];
    }

    private static addressToBytes(address: number): number {
        return address * Heap.WORD_SIZE;
    }

    private allocate(size: number, tag: number): number {
        let address: number;

        if (this.freeList.length > 0) {
            address = this.freeList.pop()!;
        } else {
            address = this.free;
            this.free += size + Heap.METADATA_SIZE;
            if (Heap.addressToBytes(this.free) >= Heap.HEAP_SIZE) {
                throw new Error("Out of memory");
            }
        }

        const byteOffset = Heap.addressToBytes(address);
        this.heap.setUint8(byteOffset + this.tagOffset, tag);
        this.heap.setUint16(byteOffset + this.sizeOffset, size, true);

        return address;
    }

    public heap_allocate_Frame(size: number): number {
        return this.allocate(size, this.TAG_FRAME);
    }

    public heap_allocate_Builtin(builtin_id: number): number {
        const address = this.allocate(1, this.TAG_BUILTIN);
        const byteOffset = Heap.addressToBytes(address + Heap.METADATA_SIZE);
        this.heap.setUint32(byteOffset, builtin_id, true);
        return address;
    }

    public heap_allocate_Closure(arity: number, address: number, env: number): number {
        const addr = this.allocate(3, this.TAG_CLOSURE);
        const byteOffset = Heap.addressToBytes(addr + Heap.METADATA_SIZE);
        this.heap.setUint32(byteOffset, arity, true);
        this.heap.setUint32(byteOffset + 4, address, true);
        this.heap.setUint32(byteOffset + 8, env, true);
        return addr;
    }

    public heap_allocate_Callframe(env: number, PC: number): number {
        const address = this.allocate(2, this.TAG_CALLFRAME);
        const byteOffset = Heap.addressToBytes(address + Heap.METADATA_SIZE);
        this.heap.setUint32(byteOffset, env, true);
        this.heap.setUint32(byteOffset + 4, PC, true);
        return address;
    }

    public heap_get_child(address: number, childIndex: number): number {
        if (childIndex < 0 || childIndex > 1) {
            throw new Error("Invalid child index");
        }
        const byteOffset = Heap.addressToBytes(address + Heap.METADATA_SIZE + childIndex);
        return this.heap.getUint32(byteOffset, true);
    }

    public heap_set_child(address: number, childIndex: number, value: number): void {
        if (childIndex < 0 || childIndex > 1) {
            throw new Error("Invalid child index");
        }
        const byteOffset = Heap.addressToBytes(address + Heap.METADATA_SIZE + childIndex);
        this.heap.setUint32(byteOffset, value, true);
    }

    public heap_allocate_Pair(head: number, tail: number): number {
        const address = this.allocate(2, this.TAG_PAIR);
        this.heap_set_child(address, 0, head);
        this.heap_set_child(address, 1, tail);
        return address;
    }

    public heap_allocate_Number(num: number): number {
        const address = this.allocate(1, this.TAG_NUMBER);
        const byteOffset = Heap.addressToBytes(address + Heap.METADATA_SIZE);
        this.heap.setFloat64(byteOffset, num, true);
        return address;
    }

    public heap_allocate_Blockframe(builtin_id: number): number {
        const address = this.allocate(1, this.TAG_BLOCKFRAME);
        const byteOffset = Heap.addressToBytes(address + Heap.METADATA_SIZE);
        this.heap.setUint32(byteOffset, builtin_id, true);
        return address;
    }

    public heap_allocate_Environment(number_of_frames: number): number {
        const address = this.allocate(number_of_frames, this.TAG_ENVIRONMENT);
        for (let i = 0; i < number_of_frames; i++) {
            this.heap_set_child(address, i, this.Undefined);
        }
        return address;
    }

    public initialise_empty_heap(): HeapInterface {
        this.buffer = new ArrayBuffer(Heap.HEAP_SIZE);
        this.heap = new DataView(this.buffer);
        this.free = 0;
        this.freeList = [];

        const nodeSize = 1;
        let i = 0;
        for (i = 0; i <= Heap.HEAP_SIZE / Heap.WORD_SIZE - nodeSize; i += nodeSize) {
            this.heap_set_child(i, 0, i + nodeSize);
        }
        this.heap_set_child(i - nodeSize, 0, -1);
        this.free = 0;

        return this;
    }

    public allocate_literal_values(): void {
        const nullValue = this.Undefined;
        const trueValue = 1;
        const falseValue = 0;

        console.log(`Allocated literals: null=${nullValue}, true=${trueValue}, false=${falseValue}`);
    }

    public address_to_JS_value(address: number): any {
        if (this.is_Null(address)) {
            return null;
        } else if (this.is_Pair(address)) {
            const head = this.heap_get_child(address, 0);
            const tail = this.heap_get_child(address, 1);
            return [this.address_to_JS_value(head), this.address_to_JS_value(tail)];
        } else if (this.is_Number(address)) {
            return this.heap_get_Number(address);
        } else if (this.is_Builtin(address)) {
            return `<Builtin ${this.heap_get_Builtin_id(address)}>`;
        } else if (this.is_Callframe(address)) {
            return `<Callframe PC=${this.heap_get_Callframe_pc(address)}>`;
        } else if (this.is_Environment(address)) {
            return `<Environment>`;
        } else {
            throw new Error("Unknown heap address type");
        }
    }

    public JS_value_to_address(value: any): number {
        if (value === null) {
            return this.Undefined;
        } else if (typeof value === "number") {
            return this.heap_allocate_Number(value);
        } else if (Array.isArray(value)) {
            const head = this.JS_value_to_address(value[0]);
            const tail = this.JS_value_to_address(value[1]);
            return this.heap_allocate_Pair(head, tail);
        } else {
            throw new Error("Unsupported JavaScript value type");
        }
    }

    public heap_Environment_extend(frame_address: number, env: number): number {
        const newEnv = this.allocate(2, this.TAG_FRAME);
        this.heap_set_child(newEnv, 0, frame_address);
        this.heap_set_child(newEnv, 1, env);
        return newEnv;
    }

    public heap_get_Blockframe_environment(address: number): number {
        if (!this.is_Blockframe(address)) {
            throw new Error("Address is not a blockframe");
        }
        const byteOffset = Heap.addressToBytes(address + Heap.METADATA_SIZE);
        return this.heap.getUint32(byteOffset, true);
    }

    public heap_get_Environment_value(env: number, index: number): number {
        if (!this.is_Environment(env)) {
            throw new Error("Address is not an environment");
        }
        const byteOffset = Heap.addressToBytes(env + Heap.METADATA_SIZE + index);
        return this.heap.getUint32(byteOffset, true);
    }

    public heap_set_Environment_value(env: number, index: number, val: number): void {
        if (!this.is_Environment(env)) {
            throw new Error("Address is not an environment");
        }
        const byteOffset = Heap.addressToBytes(env + Heap.METADATA_SIZE + index);
        this.heap.setUint32(byteOffset, val, true);
    }

    public heap_get_Builtin_id(address: number): number {
        if (!this.is_Builtin(address)) {
            throw new Error("Address is not a builtin");
        }
        const byteOffset = Heap.addressToBytes(address + Heap.METADATA_SIZE);
        return this.heap.getUint32(byteOffset, true);
    }

    public heap_get_Closure_pc(address: number): number {
        if (!this.is_Closure(address)) {
            throw new Error("Address is not a closure");
        }
        const byteOffset = Heap.addressToBytes(address + Heap.METADATA_SIZE + 4);
        return this.heap.getUint32(byteOffset, true);
    }

    public heap_get_Closure_environment(address: number): number {
        if (!this.is_Closure(address)) {
            throw new Error("Address is not a closure");
        }
        const byteOffset = Heap.addressToBytes(address + Heap.METADATA_SIZE + 8);
        return this.heap.getUint32(byteOffset, true);
    }

    public heap_get_Callframe_pc(address: number): number {
        if (!this.is_Callframe(address)) {
            throw new Error("Address is not a callframe");
        }
        const byteOffset = Heap.addressToBytes(address + Heap.METADATA_SIZE + 4);
        return this.heap.getUint32(byteOffset, true);
    }

    public heap_get_Callframe_environment(address: number): number {
        if (!this.is_Callframe(address)) {
            throw new Error("Address is not a callframe");
        }
        const byteOffset = Heap.addressToBytes(address + Heap.METADATA_SIZE);
        return this.heap.getUint32(byteOffset, true);
    }

    public is_Pair(address: number): boolean {
        const byteOffset = Heap.addressToBytes(address + this.tagOffset);
        const tag = this.heap.getUint8(byteOffset);
        return tag === this.TAG_PAIR;
    }

    public is_Null(address: number): boolean {
        return address === this.Undefined;
    }

    public is_True(address: number): boolean {
        return address === 1;
    }

    public is_Unassigned(address: number): boolean {
        return address === this.Unassigned;
    }

    public is_Builtin(address: number): boolean {
        const byteOffset = Heap.addressToBytes(address + this.tagOffset);
        const tag = this.heap.getUint8(byteOffset);
        return tag === this.TAG_BUILTIN;
    }

    public is_Callframe(address: number): boolean {
        const byteOffset = Heap.addressToBytes(address + this.tagOffset);
        const tag = this.heap.getUint8(byteOffset);
        return tag === this.TAG_CALLFRAME;
    }

    public is_Closure(address: number): boolean {
        const byteOffset = Heap.addressToBytes(address + this.tagOffset);
        const tag = this.heap.getUint8(byteOffset);
        return tag === this.TAG_CLOSURE;
    }

    public is_Environment(address: number): boolean {
        const byteOffset = Heap.addressToBytes(address + this.tagOffset);
        const tag = this.heap.getUint8(byteOffset);
        return tag === this.TAG_ENVIRONMENT;
    }

    public is_Number(address: number): boolean {
        const byteOffset = Heap.addressToBytes(address + this.tagOffset);
        const tag = this.heap.getUint8(byteOffset);
        return tag === this.TAG_NUMBER;
    }

    public is_Blockframe(address: number): boolean {
        const byteOffset = Heap.addressToBytes(address + this.tagOffset);
        const tag = this.heap.getUint8(byteOffset);
        return tag === this.TAG_BLOCKFRAME;
    }

    private heap_get_Number(address: number): number {
        if (!this.is_Number(address)) {
            throw new Error("Address is not a number");
        }
        const byteOffset = Heap.addressToBytes(address + Heap.METADATA_SIZE);
        return this.heap.getFloat64(byteOffset, true);
    }
}
