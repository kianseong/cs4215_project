import { describe, test, expect, beforeEach, vi } from 'vitest';
import { RustEvaluator } from '../src/RustEvaluator';
import type { IRunnerPlugin } from 'conductor/dist/conductor/runner/types';

describe('Test RustEvaluator with full Rust programs - focusing on testing mutability of variables', () => {
  let mockConductor: IRunnerPlugin;

  beforeEach(() => {
    mockConductor = {} as IRunnerPlugin;
  });

  test('mutating mutable variable', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        let mut x: number = 1;
        x = 2;
        x
    `);

    expect(result).toBe(2);
  });

  test('mutating immutable variable', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const throwError = () => rustEvaluator.evaluate(`
        let x: number = 1;
        x = 2;
    `);

    expect(throwError).toThrow('Trying to modify immutable variable x');
  });

  test('mutating mutable nested variable', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        let mut x: number = 1;
        {
            {
                x = 3;
                x
            }
        }
    `);

    expect(result).toBe(3);
  });

  test('mutating immutable nested variable', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const throwError = () => rustEvaluator.evaluate(`
        let x: number = 1;
        {
            {
                x = 3;
                x
            }
        }
    `);

    expect(throwError).toThrow('Trying to modify immutable variable x');
  });

  test('mutating immutable nested repeated variable', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const throwError = () => rustEvaluator.evaluate(`
        let mut x: number = 1;
        {
            {   let x: number = 2;
                x = 3;
                x
            }
        }
    `);

    expect(throwError).toThrow('Trying to modify immutable variable x');
  });

  test('mutating mutable nested repeated variable', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        let x: number = 1;
        {
            {   let mut x: number = 2;
                x = 3;
                x
            }
        }
    `);

    expect(result).toBe(3);
  });

  test('mutating function parameter', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        fn square(x: number) -> number {
            x = x * x;
            x
        }
        square(5)
    `);

    expect(result).toBe(25);
  });

  test('while loop modifying mutable variable', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        let mut x: number = 0;
        while (x == 0) {
            x = x + 1;
        }
        x
    `);

    expect(result).toBe(1);
  });

  test('if cond modifying mutable variable', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        let mut x: number = 0;
        if (true) {
            x = x + 1;
        };
        x
    `);

    expect(result).toBe(1);
  });

  test('while loop mutating immutable variable', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const throwError = () => rustEvaluator.evaluate(`
        let x: number = 0;
        while (true) {
            x = x + 1;
        }
        x
    `);

    expect(throwError).toThrow('Trying to modify immutable variable x');
  });

  test('if cond mutating immutable variable', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const throwError = () => rustEvaluator.evaluate(`
        let x: number = 0;
        if (true) {
            x = x + 1;
        };
        x
    `);

    expect(throwError).toThrow('Trying to modify immutable variable x');
  });

});
