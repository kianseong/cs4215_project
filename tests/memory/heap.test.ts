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

    // Test Pair Allocation
    it('should allocate a pair and correctly set head and tail values', () => {
        const head = 42;
        const tail = 99;
        const pairAddress = heap.heap_allocate_Pair(head, tail);

        expect(pairAddress).toBeGreaterThan(0);
        expect(heap.heap_get_child(pairAddress, 0)).toBe(head);
        expect(heap.heap_get_child(pairAddress, 1)).toBe(tail);
    });

    it('should correctly identify a pair using is_Pair', () => {
        const pairAddress = heap.heap_allocate_Pair(1, 2);
        expect(heap.is_Pair(pairAddress)).toBe(true);
    });

    it('should return false for non-pair addresses', () => {
        const numAddress = heap.heap_allocate_Number(123);
        expect(heap.is_Pair(numAddress)).toBe(false);
    });

    // Test Number Allocation
    it('should allocate a number and store its value correctly', () => {
        const numberValue = 123.45;
        const numAddress = heap.heap_allocate_Number(numberValue);

        expect(numAddress).toBeGreaterThan(0);
        expect(heap.get(numAddress + 1)).toBe(numberValue);
    });

    it('should correctly identify a number using is_Number', () => {
        const numAddress = heap.heap_allocate_Number(678.90);
        expect(heap.is_Number(numAddress)).toBe(true);
    });

    it('should return false for non-number addresses', () => {
        const pairAddress = heap.heap_allocate_Pair(1, 2);
        expect(heap.is_Number(pairAddress)).toBe(false);
    });

    // Test Blockframe Allocation
    it('should allocate a blockframe and store the builtin_id', () => {
        const builtinId = 42;
        const blockframeAddress = heap.heap_allocate_Blockframe(builtinId);

        expect(blockframeAddress).toBeGreaterThan(0);
        expect(heap.get(blockframeAddress + 1)).toBe(builtinId);
    });

});
