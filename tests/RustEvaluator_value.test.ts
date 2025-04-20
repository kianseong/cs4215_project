import { describe, test, expect, beforeEach } from 'vitest';
import { RustEvaluator } from '../src/RustEvaluator';
import type { IRunnerPlugin } from 'conductor/dist/conductor/runner/types';

describe('Test RustEvaluator with full Rust programs - focusing on testing that value and non value producing blocks are handled correctly', () => {
    let mockConductor: IRunnerPlugin;
    let rustEvaluator: RustEvaluator;

    beforeEach(() => {
        mockConductor = {} as IRunnerPlugin;
        rustEvaluator = new RustEvaluator(mockConductor);
    });


    test('test block, value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn testfunction(n: number) -> number {
                let x: number = 10;
                {
                    x - n
                }
            }
            1 + testfunction(5)
        `);

        expect(result).toBe(6);
    });

    test('test non value producing block statements, value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn testfunction(n: number) -> number {
                {
                    10 + n;
                }
                2 * n
            }
            1 + testfunction(5)
        `);

        expect(result).toBe(11);
    });

    test('test value producing block statements, value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn testfunction(n: number) -> number {
                {
                    10 + n
                }
                2 * n
            }
            1 + testfunction(5)
        `);

        expect(result).toBe(11);
    });

    test('test while, not value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn testfunction(x: number) -> number {
                while (x > 1) {
                    x = x - 1;
                    x
                }
            }
            testfunction(5)
        `);

        expect(result).toBe(undefined);
    });

    test('test while statement, not value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn testfunction(x: number) -> number {
                while (x > 1) {
                    x = x - 1;
                    x;
                }
                let mut y: number = 10;
                while (y > 1) {
                    y = y - 1;
                    y
                }
                y
            }
            2 * testfunction(5)
        `);

        expect(result).toBe(2);
    });

    test('test if return, true, not value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn testfunction(x: number) -> number {
                if (x > 0) {
                    x;
                } else {
                    2;
                }
            }
            testfunction(5)
        `);

        expect(result).toBe(undefined);
    });

    test('test if return, true, value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn testfunction(x: number) -> number {
                if (x > 0) {
                    x
                } else {
                    2
                }
            }
            1 + testfunction(5)
        `);

        expect(result).toBe(6);
    });

    test('test if return, no else, value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn testfunction(x: number) -> number {
                if (x < 0) {
                    x
                }
            }
            testfunction(5)
        `);

        expect(result).toBe(undefined);
    });

    test('test if statement, no else, value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn testfunction(x: number) -> number {
                if (x < 0) {
                    x
                };
                1
            }
            3 + testfunction(5)
        `);

        expect(result).toBe(4);
    });

    test('test if statement, true, value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn testfunction(x: number) -> number {
                if (x > 0) {
                    x
                };
                1
            }
            3 + testfunction(5)
        `);

        expect(result).toBe(4);
    });

    test('test if statement, true, non value producing', () => {
        const result = rustEvaluator.evaluate(`
            fn testfunction(x: number) -> number {
                if (x > 0) {
                    x;
                };
                1
            }
            3 + testfunction(5)
        `);

        expect(result).toBe(4);
    });
});
