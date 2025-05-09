import { describe, test, expect, beforeEach } from 'vitest';
import { RustEvaluator } from '../src/RustEvaluator';
import type { IRunnerPlugin } from 'conductor/dist/conductor/runner/types';

describe('Test RustEvaluator with full Rust programs - focusing on testing functions', () => {
    let mockConductor: IRunnerPlugin;
    let rustEvaluator: RustEvaluator;

    beforeEach(() => {
        mockConductor = {} as IRunnerPlugin;
        rustEvaluator = new RustEvaluator(mockConductor);
    });

    test('function should not be able to read variables declared outside', () => {
        const rustEvaluator = new RustEvaluator(mockConductor);
    
        const throwError = () => rustEvaluator.evaluate(`
            let x: number = 1;
            fn simple() {
                x = 2;
            }
        `);
    
        expect(throwError).toThrow('Variable x has not been declared');
      });

      test('nested functions', () => {
        const rustEvaluator = new RustEvaluator(mockConductor);
    
        const result = rustEvaluator.evaluate(`
            let x: number = 5;
            fn add_nested(y: number) -> number {
                fn add(z: number) -> number {
                    return z + 1;
                }
                return add(y);
            }
            add_nested(x)
        `);
    
        expect(result).toBe(6);
      });

      test('function should not be able to read variables declared outside', () => {
        const rustEvaluator = new RustEvaluator(mockConductor);
    
        const throwError = () => rustEvaluator.evaluate(`
            let x: number = 1;
            fn simple() {
                x
            }
        `);
    
        expect(throwError).toThrow('Variable x has not been declared');
      });

    test('function with no arguments no return value', () => {
        const result = rustEvaluator.evaluate(`
            fn simple() {
                1;
            }
            simple()
        `);

        expect(result).toBe(undefined);
    });

    test('function with no arguments, return value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn simple() -> number {
                return 42;
            }
            simple()
        `);

        expect(result).toBe(42);
    });

    test('function with no arguments, value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn simple() -> number {
                42
            }
            simple()
        `);

        expect(result).toBe(42);
    });

    test('function with one argument, value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn square(x: number) -> number {
                return x * x;
            }
            square(5)
        `);

        expect(result).toBe(25);
    });

    test('function with multiple arguments, value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn add(a: number, b: number) -> number {
                let result: number = a + b;
                result
            }
            add(3, 7)
        `);

        expect(result).toBe(10);
    });

    test('function with early return, value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn check_positive(x: number) -> bool {
                if (x > 0) {
                    return true;
                };
                return false;
            }
            check_positive(5)
        `);

        expect(result).toBe(true);
    });

    test('nested function calls, value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn add(a: number, b: number) -> number {
                return a + b;
            }
            fn multiply(x: number, y: number) -> number {
                return x * y;
            }
            multiply(add(2, 3), 4)
        `);

        expect(result).toBe(20);
    });

    test('recursive function, value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn factorial(n: number) -> number {
                if (n <= 1) {
                    return 1;
                };
                return n * factorial(n - 1);
            }
            factorial(5)
        `);

        expect(result).toBe(120);
    });

    test('testing function arguments scope', () => {
        const result = rustEvaluator.evaluate(`
            let x: number = 2;
            fn square(x: number) -> number {
                return x * x;
            }
            square(5)
        `);

        expect(result).toBe(25);
    });

    test('testing function block variables scope', () => {
        const result = rustEvaluator.evaluate(`
            let y: number = 10;
            fn constant() -> number {
                let y: number = 0;
                return y;
            }
            constant()
        `);

        expect(result).toBe(0);
    });

    test('testing function early return nothing', () => {
        const result = rustEvaluator.evaluate(`
            fn earlyReturn() {
                1 + 1;
                return;
                2 + 2
            }
            earlyReturn();
        `);

        expect(result).toBe(undefined);
    });

    test('apply builtin', () => {
        const result = rustEvaluator.evaluate(`
            is_null(1)
        `);

        expect(result).toBe(false);
    });


    // test('function returning a closure, value producing', () => {
    //     const result = rustEvaluator.evaluate(`
    //         fn create_multiplier(multiplier: f64) -> |f64| -> f64 {
    //             return |x: f64| -> f64 { return x * multiplier; };
    //         }
    //         let double = create_multiplier(2.0);
    //         double(5);
    //     `);

    //     expect(result).toBe('10');
    // });

    // test('closure capturing outer variable, value producing', () => {
    //     const result = rustEvaluator.evaluate(`
    //         let factor = 3.0;
    //         let multiply = |x: f64| -> f64 { return x * factor; };
    //         multiply(4);
    //     `);

    //     expect(result).toBe('12');
    // });

    // test('function with mutable variables, value producing', () => {
    //     const result = rustEvaluator.evaluate(`
    //         fn increment(mut x: f64) -> f64 {
    //             x = x + 1.0;
    //             return x;
    //         }
    //         increment(5);
    //     `);

    //     expect(result).toBe('6');
    // });
});
