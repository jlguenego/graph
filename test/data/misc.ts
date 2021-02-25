import {OrderedPair} from '../../src';

export const expectedDisjointCouples = new Set([
  new OrderedPair(1, 2),
  new OrderedPair(1, 3),
  new OrderedPair(1, 4),
  new OrderedPair(1, 5),

  new OrderedPair(2, 1),
  new OrderedPair(2, 3),
  new OrderedPair(2, 4),
  new OrderedPair(2, 5),

  new OrderedPair(3, 1),
  new OrderedPair(3, 2),
  new OrderedPair(3, 4),
  new OrderedPair(3, 5),

  new OrderedPair(4, 1),
  new OrderedPair(4, 2),
  new OrderedPair(4, 3),
  new OrderedPair(4, 5),

  new OrderedPair(5, 1),
  new OrderedPair(5, 2),
  new OrderedPair(5, 3),
  new OrderedPair(5, 4),
]);

export const expectedPowerset: Set<Set<number>> = new Set([
  new Set(),
  new Set([1]),
  new Set([2]),
  new Set([3]),
  new Set([1, 2]),
  new Set([1, 3]),
  new Set([2, 3]),
  new Set([1, 2, 3]),
]);

export const expectedCartesianProduct = new Set<[number, string]>([
  [1, 'a'],
  [1, 'b'],
  [1, 'c'],
  [2, 'a'],
  [2, 'b'],
  [2, 'c'],
]);
