import { describe, test, expect, beforeEach } from 'vitest';
import { Heap } from '../src/memory/heap';

describe('Heap with Free List', () => {
    let heap: Heap;

    beforeEach(() => {
        heap = new Heap();
        heap.initialise_empty_heap();
    });

    test('simple allocate and deallocate', () => {
        const addr = heap.reserve(16, 1); 
        
        expect(typeof addr).toBe('number');
        expect(addr).toBeGreaterThanOrEqual(0);
        
        const size = heap.get_size(addr);
        expect(size).toBeGreaterThanOrEqual(16);

        heap.deallocate(addr);
    });

    test('reuse memory after deallocation', () => {
        const addr1 = heap.reserve(16, 0);
        heap.deallocate(addr1);

        const addr2 = heap.reserve(16, 0);
        expect(addr2).toBe(addr1); // Should reuse the same block
    });

    test('split larger blocks when needed', () => {
        const addr1 = heap.reserve(16, 0); // Should split from a larger block
        const size1 = heap.get_size(addr1);
        expect(size1).toBeGreaterThanOrEqual(16);

        heap.deallocate(addr1);
    });

    test('merge buddy blocks on deallocation', () => {
        const addr1 = heap.reserve(16, 0);
        const addr2 = heap.reserve(16, 0);

        heap.deallocate(addr1);
        heap.deallocate(addr2);

        // Allocate again; should ideally return one of the merged blocks
        const addr3 = heap.reserve(16, 0);
        expect(typeof addr3).toBe('number');
    });

    test('throw error when memory exhausted', () => {
        // Calculate maximum possible allocations based on heap size
        const heapSize = 2 ** 16; // HEAP_SIZE
        const wordSize = 2 ** 3;  // WORD_SIZE
        const maxWords = heapSize / wordSize;
        
        // Try to allocate slightly more than the heap can handle
        const allocations = [];
        let errorThrown = false;
        
        try {
            for (let i = 0; i < maxWords + 100; i++) {
                allocations.push(heap.reserve(1, 0));
            }
        } catch (e) {
            errorThrown = true;
            expect(e.message).toBe("Heap out of memory: No space available for allocation.");
        }
        
        expect(errorThrown).toBe(true);
        
        // Clean up
        for (const addr of allocations) {
            heap.deallocate(addr);
        }
    });
});

describe('Heap Stress Test', () => {
    let heap: Heap;

    beforeEach(() => {
        heap = new Heap();
        heap.initialise_empty_heap();
    });

    test('should allocate and deallocate thousands of small blocks without error', () => {
        const addresses: number[] = [];
        const maxAllocations = 1000;

        for (let i = 0; i < maxAllocations; i++) {
            const addr = heap.reserve(1, 0);
            addresses.push(addr);
        }

        expect(addresses.length).toBe(maxAllocations);

        // Deallocate all
        for (const addr of addresses) {
            heap.deallocate(addr);
        }
    });

    test('should reuse memory efficiently after full deallocation', () => {
        const allocations = [];
        const maxAllocations = 1000;

        // Allocate blocks
        for (let i = 0; i < maxAllocations; i++) {
            allocations.push(heap.reserve(1, 0));
        }

        // Deallocate half
        for (const addr of allocations.slice(0, maxAllocations/2)) {
            heap.deallocate(addr);
        }

        const reused = heap.reserve(128, 0);
        expect(typeof reused).toBe('number');

        // Clean up remaining allocations
        for (const addr of allocations.slice(maxAllocations/2)) {
            heap.deallocate(addr);
        }
    });

}); 