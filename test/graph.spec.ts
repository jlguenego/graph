import {OrderedPair, RelationOn} from '@jlguenego/set';
import assert from 'assert';
import {Graph} from '../src';

describe('Graph Unit Test', () => {
  it('test graph_creation', () => {
    const nodeset = new Set<string>(['a', 'b', 'c']);
    const relation = new RelationOn((a: string, b: string) => a < b);
    const graph = new Graph<string>(nodeset, relation);
    assert.deepStrictEqual(graph.size, 3);
  });
  it('test graph_creation2', () => {
    const nodeset = new Set<number>([1, 2, 3, 4]);
    const relation = RelationOn.fromSet(
      new Set([
        new OrderedPair(1, 1),
        new OrderedPair(1, 2),
        new OrderedPair(2, 3),
        new OrderedPair(2, 4),
        new OrderedPair(3, 4),
        new OrderedPair(4, 1),
        new OrderedPair(4, 3),
      ])
    );
    const graph = new Graph<number>(nodeset, relation);
    assert.deepStrictEqual(graph.size, 4);
    assert.deepStrictEqual(graph.edges.size, 7);
  });
});
