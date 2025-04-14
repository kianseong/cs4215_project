import { describe, test, expect, beforeEach, vi } from 'vitest';
import { RustEvaluator } from '../src/RustEvaluator';
import type { IRunnerPlugin } from 'conductor/dist/conductor/runner/types';

describe('Test RustEvaluator with full Rust programs', () => {
  let mockConductor: IRunnerPlugin;

  beforeEach(() => {
    // Create a manual mock of IRunnerPlugin
    mockConductor = {} as IRunnerPlugin;
  });

  test('evaluate value expression', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate('1');

    expect(result).toBe('1');
  });

  test('evaluate non-value producing statement', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate('1;');

    expect(result).toBe('undefined');
  });

  test('empty statement', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(';');

    expect(result).toBe('undefined');
  });

  test('empty statement mixed with other statements', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        2;
        ;
        1
    `);

    expect(result).toBe('1');
  });

  test('binary comparison op', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        1 === 2
    `);

    expect(result).toBe('false');
  });

  test('unary op', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        !false
    `);

    expect(result).toBe('true');
  });

  test('binary comparison op', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        1 === 2
    `);

    expect(result).toBe('false');
  });

  test('if only, if is true, value producing', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        if (1 == 1) {
            2
        }
    `);

    expect(result).toBe('2');
  });

  test('if only, if is true, value supressed', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        if (1 == 1) {
            2;
        }
    `);

    expect(result).toBe('undefined');
  });

  test('if only, if is false', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        if (false) {
            2;
        }
    `);

    expect(result).toBe('undefined');
  });

  test('if else, if is true, value producing', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        if (1+3==4) {
            8
        } else {
            10
        }
    `);

    expect(result).toBe('8');
  });

  test('if else, if is false, value producing', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        if (1+3==10) {
            8
        } else {
            10
        }
    `);

    expect(result).toBe('10');
  });

  test('if else, if is false, value suppressed', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        if (1+3==10) {
            8
        } else {
            10;
        }
    `);

    expect(result).toBe('undefined');
  });
});
