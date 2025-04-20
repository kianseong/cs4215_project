import { describe, test, expect, beforeEach, vi } from 'vitest';
import { RustEvaluator } from '../src/RustEvaluator';
import type { IRunnerPlugin } from 'conductor/dist/conductor/runner/types';

describe('Test RustEvaluator with full Rust programs - focusing on testing arrays', () => {
  let mockConductor: IRunnerPlugin;

  beforeEach(() => {
    mockConductor = {} as IRunnerPlugin;
  });

  test('array declaration and initialization', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
      let arr = [1, 2, 3, 4, 5];
      arr
    `);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('array indexing', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
      let arr = [10, 20, 30];
      arr[1]
    `);

    expect(result).toBe(20);
  });

  test('array length', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
      let arr = [1, 2, 3, 4, 5];
      arr.len()
    `);

    expect(result).toBe(5);
  });

  test('array iteration', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
      let arr = [1, 2, 3];
      let mut sum = 0;
      for i in arr {
        sum = sum + i;
      }
      sum
    `);

    expect(result).toBe(6);
  });

  test('array modification', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
      let mut arr = [1, 2, 3];
      arr[1] = 20;
      arr
    `);

    expect(result).toEqual([1, 20, 3]);
  });

  test('array slice', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
      let arr = [1, 2, 3, 4, 5];
      &arr[1..3]
    `);

    expect(result).toEqual([2, 3]);
  });

  test('array concatenation', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
      let arr1 = [1, 2];
      let arr2 = [3, 4];
      [arr1, arr2].concat()
    `);

    expect(result).toEqual([1, 2, 3, 4]);
  });

  test('array with different types', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
      let arr = [1, "two", true];
      arr
    `);

    expect(result).toEqual([1, "two", true]);
  });

  test('empty array', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
      let arr: [i32; 0] = [];
      arr
    `);

    expect(result).toEqual([]);
  });

  test('array with repeated values', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
      let arr = [0; 5];
      arr
    `);

    expect(result).toEqual([0, 0, 0, 0, 0]);
  });
});
