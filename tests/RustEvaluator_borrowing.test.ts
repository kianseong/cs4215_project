import { describe, test, expect, beforeEach, vi } from 'vitest';
import { RustEvaluator } from '../src/RustEvaluator';
import type { IRunnerPlugin } from 'conductor/dist/conductor/runner/types';

describe('Test RustEvaluator with full Rust programs - focusing on testing borrowing of variables', () => {
  let mockConductor: IRunnerPlugin;

  beforeEach(() => {
    mockConductor = {} as IRunnerPlugin;
  });

  test('borrow and read variable', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        let x: number = 1;
        let y: number = &x;
        x;
        y
    `);

    expect(result).toBe(1);
  });

  test('borrow then mutate variable should throw errow', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const throwError = () => rustEvaluator.evaluate(`
        let x: number = 1;
        let mut y: number = &x;
        y = y + 1;
    `);

    expect(throwError).toThrow('Cannot modify immutably borrowed variable y');
  });

  test('borrow then mutate original should throw errow', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const throwError = () => rustEvaluator.evaluate(`
        let mut x: number = 1;
        let mut y: number = &x;
        x = 2;
    `);

    expect(throwError).toThrow('Cannot modify variable x while there are active borrows');
  });

  test('mutable borrow and read variable', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        let x: number = 1;
        let y: number = &mut x;
        y
    `);

    expect(result).toBe(1);
  });

  test('mutable borrow and write variable', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        let x: number = 1;
        let mut y: number = &mut x;
        y = 2;
        y
    `);

    expect(result).toBe(2);
  });

  test('mutable borrow then read original should throw errow', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const throwError = () => rustEvaluator.evaluate(`
        let mut x: number = 1;
        let mut y: number = &mut x;
        x
    `);

    expect(throwError).toThrow('Variable x has been borrowed mutably and cannot be read from.');
  });

  test('mutable borrow then write original should throw errow', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const throwError = () => rustEvaluator.evaluate(`
        let mut x: number = 1;
        let mut y: number = &mut x;
        x = 1;
    `);

    expect(throwError).toThrow('Cannot modify variable x while there are active borrows');
  });

  test('mutable borrow then immutable borrow should throw errow', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const throwError = () => rustEvaluator.evaluate(`
        let mut x: number = 1;
        let mut y: number = &mut x;
        let mut z: number = &x;
    `);

    expect(throwError).toThrow('Variable x has been borrowed mutably and cannot be read from.');
  });

  test('immutable borrow then mutable borrow should throw errow', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const throwError = () => rustEvaluator.evaluate(`
        let mut x: number = 1;
        let mut y: number = &x;
        let mut z: number = &mut x;
    `);

    expect(throwError).toThrow('Cannot mutably borrow variable x as it has already been borrowed.');
  });

  test('immutable borrow a borrowed variable is not allowed yet', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const throwError = () => rustEvaluator.evaluate(`
        let mut x: number = 1;
        let mut y: number = &x;
        let mut z: number = &y;
    `);

    expect(throwError).toThrow('Simple Rust currently does not support borrowing of borrowed variable y');
  });

  test('multiple immutable borrows allowed', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        let mut x: number = 1;
        let mut y: number = &x;
        let mut z: number = &x;
        z
    `);

    expect(result).toBe(1);
  });

  test('Immutably variables from smaller scope should release variable after exiting scope', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        let mut x: number = 1;
        {
            let mut y: number = &x;
        }
        x = 2;
        x
    `);

    expect(result).toBe(2);
  });

  test('Mutably variables from smaller scope should release variable after exiting scope', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        let mut x: number = 1;
        {
            let mut y: number = &mut x;
        }
        x
    `);

    expect(result).toBe(1);
  });

  test('Borrowing through assignment should work the same', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        let x: number = 1;
        let mut y: number = 2;
        y = &mut x;
        y
    `);

    expect(result).toBe(1);
  });

  test('Immutably borrowing variables through function calls should work the same', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        let x: number = 5;
        fn square(x: &number) -> number {
            return x * x;
        }
        square(&x)
    `);

    expect(result).toBe(25);
  });

  test('Immutably borrowing variables through nested function calls should work the same', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        let x: number = 5;
        fn square(x: &number) -> number {
            return x * x;
        }
        {
            square(&x)
        }
    `);

    expect(result).toBe(25);
  });

  test('Immutably borrowing variables through nested function declaration and call should work the same', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        fn square(x: &number) -> number {
            return x * x;
        }
        {
            let x: number = 5;
            square(&x)
        }
    `);

    expect(result).toBe(25);
  });

  test('Immutably borrowing variables through nested function calls should allow owner to access', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        let x: number = 5;
        fn square(x: &mut number) -> number {
            return x * x;
        }
        {
            square(&mut x);
        }
        x
    `);

    expect(result).toBe(5);
  });

  test('Immutably borrowing variables through function calls should prevent owner from accessing', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        let x: number = 5;
        fn square(x: &mut number) -> number {
            return x * x;
        }
        square(&mut x);
        x
    `);

    expect(result).toBe(5);
  });

  test('Immutably borrowing variables through function calls should prevent it from being modified', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const throwError = () => rustEvaluator.evaluate(`
        let x: number = 5;
        fn square(x: &number) -> number {
            x = x + 1;
            return x * x;
        }
        square(&mut x);
    `);

    expect(throwError).toThrow('Trying to modify immutable variable x');
  });

  test('Mutably borrowing variables through function calls should allow it to be modified', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        let x: number = 5;
        fn square(x: &mut number) -> number {
            x = x + 1;
            return x * x;
        }
        square(&mut x)
    `);

    expect(result).toBe(36);
  });

  test('Borrowing variables through function calls should prevent it from being moved', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const throwError = () => rustEvaluator.evaluate(`
        let x: number = 5;
        fn square(x: &mut number) -> number {
            let y: number = x;
            return y * y;
        }
        square(&mut x)
    `);

    expect(throwError).toThrow('Cannot move ownership as variable x is a borrowed variable.');
  });

  test('Borrowing variables through function calls should prevent it from being borrowed', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const throwError = () => rustEvaluator.evaluate(`
        let x: number = 5;
        fn square(x: &mut number) -> number {
            let y: number = &x;
            return y * y;
        }
        square(&mut x)
    `);

    expect(throwError).toThrow("Simple Rust currently does not support borrowing of borrowed variable x.");
  });
 
});
