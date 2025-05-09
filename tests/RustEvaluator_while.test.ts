import { describe, test, expect, beforeEach, vi } from 'vitest';
import { RustEvaluator } from '../src/RustEvaluator';
import type { IRunnerPlugin } from 'conductor/dist/conductor/runner/types';

describe('Test RustEvaluator with full Rust programs - focusing on while loops', () => {
    let mockConductor: IRunnerPlugin;

    beforeEach(() => {
        mockConductor = {} as IRunnerPlugin;
    });

    test('false while loop', () => {
        const rustEvaluator = new RustEvaluator(mockConductor);

        const result = rustEvaluator.evaluate(`
            let mut x: number = 0;
            while (false) {
                x = x + 1;
            }
            x
        `);

        expect(result).toBe(0);
    });

    test('false while loop', () => {
        const rustEvaluator = new RustEvaluator(mockConductor);

        const result = rustEvaluator.evaluate(`
            let mut x: number = 0;
            while (false) {
                x = x + 1;
            }
            x
        `);

        expect(result).toBe(0);
    });

    test('non value producing while loop', () => {
        const rustEvaluator = new RustEvaluator(mockConductor);

        const result = rustEvaluator.evaluate(`
            let mut x: number = 0;
            while (x < 5) {
                x = x + 1;
                x;
            }
        `);

        expect(result).toBe(undefined);
});

//   // TO IMPLEMENT IF WE HAVE TIME
//   test('break', () => {
//     const rustEvaluator = new RustEvaluator(mockConductor);

//     const result = rustEvaluator.evaluate(`
//         let x = 0
//         while (true) {
//             x = x + 1;
//             break;
//         }
//         x
//     `);

//     expect(result).toBe('1');
//   });

//   // TO IMPLEMENT IF WE HAVE TIME
//   test('continue', () => {
//     const rustEvaluator = new RustEvaluator(mockConductor);

//     const result = rustEvaluator.evaluate(`
//         let x = 0;
//         let y = 0;
//         while (x < 10) { x = x + 1; continue; y = y + 1; }
//         x + y
//     `);

//     expect(result).toBe('10');
//   });
});
