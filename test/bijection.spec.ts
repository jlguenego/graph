import assert from 'assert';
import {Bijection} from '../src/Bijection';

describe('Bijection Unit Test', () => {
  it('test graph_creation', () => {
    const s1 = new Set([1, 2, 3]);
    const s2 = new Set(['a', 'b', 'c']);
    const bijections = Bijection.getAll(s1, s2);
    assert.deepStrictEqual(bijections.length, 6);
  });
});
