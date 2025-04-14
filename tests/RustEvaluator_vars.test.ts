import { describe, test, expect, beforeEach, vi } from 'vitest';
import { RustEvaluator } from '../src/RustEvaluator';
import type { IRunnerPlugin } from 'conductor/dist/conductor/runner/types';

describe('Test RustEvaluator with full Rust programs - focusing on testing basic variables and scopes', () => {
  let mockConductor: IRunnerPlugin;

  beforeEach(() => {
    // Create a manual mock of IRunnerPlugin
    mockConductor = {} as IRunnerPlugin;
  });

  test('built in constant', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        math_PI
    `);

    expect(result).toBe(Math.PI.toString());
  });

  test('variable declaration', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        let x: number = 1;
        x
    `);

    expect(result).toBe('1');
  });

  test('repeated variable declaration in different blocks', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        let x: number = 1;
        {
            let x: number = 2;
        }
        x
    `);

    expect(result).toBe('1');
  });

  test('repeated variable declaration in same block throws error', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const throwError = () => rustEvaluator.evaluate(`
        let x: number = 1;
        let x: number = 3;
    `);

    expect(throwError).toThrow('Repeated variable declaration');
  });

  test('variable declaration in block accessed outside block', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const throwError = () => rustEvaluator.evaluate(`
        {
            let x: number = 2;
        }
        x
    `);

    expect(throwError).toThrow('Variable x has not been declared');
  });

  test('Reading variable outside block', () => {
    const rustEvaluator = new RustEvaluator(mockConductor);

    const result = rustEvaluator.evaluate(`
        let y: number = 4; 
        {
            let x: number = y + 7; 
            x * 2
        }
    `);

    expect(result).toBe('22');
  });

});