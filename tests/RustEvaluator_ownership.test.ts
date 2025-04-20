import { describe, test, expect, beforeEach, vi } from 'vitest';
import { RustEvaluator } from '../src/RustEvaluator';
import type { IRunnerPlugin } from 'conductor/dist/conductor/runner/types';

describe('Test RustEvaluator with full Rust programs - focusing on testing ownership of variables', () => {
  let mockConductor: IRunnerPlugin;

  beforeEach(() => {
    mockConductor = {} as IRunnerPlugin;
  });

  test('accessing variable whose ownership has been moved to a new variable', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const throwError = () => rustEvaluator.evaluate(`
        let x: number = 1;
        let y: number = x;
        x
    `);

    expect(throwError).toThrow('Variable x has been moved');
  });

  test('accessing variable whose ownership has been moved to an existing variable', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const throwError = () => rustEvaluator.evaluate(`
        let x: number = 1;
        let mut y: number = 2;
        y = x;
        x
    `);

    expect(throwError).toThrow('Variable x has been moved');
  });

  test('reassigning variable to itself should not cause ownership change', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        let mut x: number = 1;
        x = x + 1;
        x
    `);

    expect(result).toBe(2);
  });

  test('moving variable into smaller scope', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const throwError = () => rustEvaluator.evaluate(`
        let x: number = 1;
        {
            let y: number = x;
        }
        x
    `);

    expect(throwError).toThrow('Variable x has been moved');
  });

  test('accessing variable whose ownership has been moved into function', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const throwError = () => rustEvaluator.evaluate(`
        let x: number = 1;
        fn simple(y: number) -> number {
            return y;
        }
        simple(x);
        x
    `);

    expect(throwError).toThrow('Variable x has been moved');
  });


  test('reassigning parameter function to itself should not cause ownership change', () => {
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

});
