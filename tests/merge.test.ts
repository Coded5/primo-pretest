import assert from 'node:assert/strict';
import { test } from 'node:test';
import { merge } from '../index.ts';

test('merges three sorted collections into ascending order', () => {
  assert.deepEqual(merge([1, 3, 5], [2, 4, 6], [10, 8, 7]),
    [1, 2, 3, 4, 5, 6, 7, 8, 10]);
});

test('preserves duplicates and handles negative numbers', () => {
  assert.deepEqual(merge([-5, 0, 2], [-3, 2, 4], [4, 2, -1]),
    [-5, -3, -1, 0, 2, 2, 2, 4, 4]);
});

test('handles all empty collections', () => {
  assert.deepEqual(merge([], [], []), []);
});

test('handles each collection as the only nonempty input', () => {
  assert.deepEqual(merge([1, 2], [], []), [1, 2]);
  assert.deepEqual(merge([], [1, 2], []), [1, 2]);
  assert.deepEqual(merge([], [], [2, 1]), [1, 2]);
});

test('does not modify the input collections', () => {
  const first = [1, 3];
  const second = [2, 4];
  const third = [6, 5];
  merge(first, second, third);
  assert.deepEqual(first, [1, 3]);
  assert.deepEqual(second, [2, 4]);
  assert.deepEqual(third, [6, 5]);
});
