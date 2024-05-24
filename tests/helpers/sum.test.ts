import { describe, expect, test } from 'vitest';
import { addArray, sum } from '../../src/helpers/sum';

describe('Add Function', () => {
  test('Should do the correct sum', () => {
    // Preparation
    const a = 1;
    const b = 4;

    // Stimulus
    const result = sum(a, b);

    // Expect Behavior
    expect(result).toBe(5);
  });
});

describe('Add Array Function', () => {
  test('Should return 0 if the array is empty', () => {
    // Preparation
    const arr = [];

    // Stimulus
    const result = addArray(arr);

    // Expect Behavior
    expect(result).toBe(0);
  });

  test('Should return the correct result of the sum of an array of numbers', () => {
    // Preparation
    const arr = [1, 2, 3, 4, 5];

    // Stimulus
    const result = addArray(arr);

    // Expect Behavior
    expect(result).toBe(15);
  });
});
