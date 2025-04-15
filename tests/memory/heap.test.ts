import { describe, it, expect, beforeEach } from 'vitest';
import { Heap } from '../../src/memory/heap';

describe('Heap', () => {
    let heap: Heap;

    beforeEach(() => {
        // Initialize a new heap before each test
        heap = new Heap();
        heap.initialise_empty_heap();
        heap.allocate_literal_values();
    });

    it('should allocate a number and retrieve it', () => {
        const num = 123;
        const addr = heap.heap_allocate_Number(num);

        expect(addr).toBeGreaterThan(0);
        expect(heap.is_Number(addr)).toBe(true);
        expect(heap.get(addr + 1)).toBe(num);
    });

    it('should allocate a pair and correctly set head and tail values', () => {
        const head = 42;
        const tail = 99;
        const pairAddress = heap.heap_allocate_Pair(head, tail);

        expect(pairAddress).toBeGreaterThan(0);
        expect(heap.is_Pair(pairAddress)).toBe(true);
        expect(heap.heap_get_child(pairAddress, 0)).toBe(head);
        expect(heap.heap_get_child(pairAddress, 1)).toBe(tail);
    });

    it('should allocate a frame', () => {
        const size = 4;
        const addr = heap.heap_allocate_Frame(size);

        expect(addr).toBeGreaterThan(0);
    });

    it('should allocate a blockframe with builtin_id', () => {
        const id = 7;
        const addr = heap.heap_allocate_Blockframe(id);

        expect(addr).toBeGreaterThan(0);
        expect(heap.get(addr + 1)).toBe(id);
    });

    it('should allocate a builtin and retrieve its id', () => {
        const id = 3;
        const addr = heap.heap_allocate_Builtin(id);

        expect(addr).toBeGreaterThan(0);
        expect(heap.is_Builtin(addr)).toBe(true);
        expect(heap.heap_get_Builtin_id(addr)).toBe(id);
    });

    it('should allocate a closure', () => {
        const arity = 2;
        const address = 42;
        const env = 99;
        const addr = heap.heap_allocate_Closure(arity, address, env);

        expect(addr).toBeGreaterThan(0);
        expect(heap.is_Closure(addr)).toBe(true);
        expect(heap.heap_get_Closure_pc(addr)).toBe(address);
        expect(heap.heap_get_Closure_environment(addr)).toBe(env);
    });

    it('should allocate a callframe', () => {
        const env = 123;
        const pc = 456;
        const addr = heap.heap_allocate_Callframe(env, pc);

        expect(addr).toBeGreaterThan(0);
        expect(heap.is_Callframe(addr)).toBe(true);
        expect(heap.heap_get_Callframe_pc(addr)).toBe(pc);
        expect(heap.heap_get_Callframe_environment(addr)).toBe(env);
    });

    it('should allocate and extend environment', () => {
        const frame1 = heap.heap_allocate_Frame(1);
        const env1 = heap.heap_allocate_Environment(1);
        heap.heap_set_child(env1, 0, frame1);

        const frame2 = heap.heap_allocate_Frame(1);
        const extended = heap.heap_Environment_extend(frame2, env1);

        expect(extended).toBeGreaterThan(0);
        expect(heap.heap_get_child(extended, 0)).toBe(frame1);
        expect(heap.heap_get_child(extended, 1)).toBe(frame2);
    });

    it('should convert number address to JS value', () => {
        const num = 5;
        const addr = heap.heap_allocate_Number(num);

        expect(heap.address_to_JS_value(addr)).toBe(num);
    });

    it('should convert pair address to JS array', () => {
        const h = heap.heap_allocate_Number(10);
        const t = heap.heap_allocate_Number(20);
        const pair = heap.heap_allocate_Pair(h, t);

        expect(heap.address_to_JS_value(pair)).toEqual([
            heap.address_to_JS_value(h),
            heap.address_to_JS_value(t)
        ]);
    });

    it('should retrieve byte and 2-byte values at offsets', () => {
        const addr = heap.heap_allocate_Builtin(0);
        heap.heap_set_byte_at_offset(addr, 1, 123);
        expect(heap.heap_get_byte_at_offset(addr, 1)).toBe(123);

        heap.heap_set_2_bytes_at_offset(addr, 2, 456);
        expect(heap.heap_get_2_bytes_at_offset(addr, 2)).toBe(456);
    });

});
