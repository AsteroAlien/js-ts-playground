import { describe, it, expect } from 'vitest';
import { performCalulationLoop } from './../workers/worker';

describe("worker function test", () => {
  it('performCalulationLoop - returns count 0 for count', () => {
    const expectedCount = 0;
    expect(performCalulationLoop(0)).toBe(expectedCount);
  });

  it('performCalulationLoop - returns count 10 for count', () => {
    const expectedCount = 10;
    expect(performCalulationLoop(5)).toBe(expectedCount);
  });

  it('performCalculationLoop- returns count 45 for count', () => {
    const expectedCount = 45;
    expect(performCalulationLoop(10)).toBe(expectedCount);
  });
});
