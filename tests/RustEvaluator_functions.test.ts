import { describe, test, expect, beforeEach } from 'vitest';
import { RustEvaluator } from '../src/RustEvaluator';
import type { IRunnerPlugin } from 'conductor/dist/conductor/runner/types';

describe('Function Tests', () => {
    let mockConductor: IRunnerPlugin;
    let rustEvaluator: RustEvaluator;

    beforeEach(() => {
        mockConductor = {} as IRunnerPlugin;
        rustEvaluator = new RustEvaluator(mockConductor);
    });

    test('function with no arguments, value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn simple() -> f64 {
                return 42;
            }
            simple();
        `);

        expect(result).toBe('42');
    });

    test('function with one argument, value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn square(x: f64) -> f64 {
                return x * x;
            }
            square(5);
        `);

        expect(result).toBe('25');
    });

    test('function with multiple arguments, value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn add(a: f64, b: f64) -> f64 {
                return a + b;
            }
            add(3, 7);
        `);

        expect(result).toBe('10');
    });

    test('function with early return, value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn check_positive(x: f64) -> bool {
                if (x > 0.0) {
                    return true;
                }
                return false;
            }
            check_positive(-5);
        `);

        expect(result).toBe('false');
    });

    test('nested function calls, value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn add(a: f64, b: f64) -> f64 {
                return a + b;
            }
            fn multiply(x: f64, y: f64) -> f64 {
                return x * y;
            }
            multiply(add(2, 3), 4);
        `);

        expect(result).toBe('20');
    });

    test('recursive function, value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn factorial(n: f64) -> f64 {
                if (n <= 1.0) {
                    return 1.0;
                }
                return n * factorial(n - 1.0);
            }
            factorial(5);
        `);

        expect(result).toBe('120');
    });

    test('function returning a closure, value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn create_multiplier(multiplier: f64) -> |f64| -> f64 {
                return |x: f64| -> f64 { return x * multiplier; };
            }
            let double = create_multiplier(2.0);
            double(5);
        `);

        expect(result).toBe('10');
    });

    test('closure capturing outer variable, value producing', () => {
        const result = rustEvaluator.evaluate(`
            let factor = 3.0;
            let multiply = |x: f64| -> f64 { return x * factor; };
            multiply(4);
        `);

        expect(result).toBe('12');
    });

    test('function with mutable variables, value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn increment(mut x: f64) -> f64 {
                x = x + 1.0;
                return x;
            }
            increment(5);
        `);

        expect(result).toBe('6');
    });
});
