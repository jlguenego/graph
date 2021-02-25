import {OrderedPair, RelationOn} from '@jlguenego/set';
import assert from 'assert';
import {Graph} from '../src';

describe('Graph Unit Test', () => {
  let nodeset: Set<number>;
  let relation: RelationOn<number>;
  let graph: Graph<number>;

  before(() => {
    nodeset = new Set<number>([1, 2, 3, 4]);
    relation = RelationOn.fromSet(
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
    graph = new Graph<number>(nodeset, relation);
  });

  it('test graph_creation', () => {
    assert.deepStrictEqual(graph.size, 4);
    assert.deepStrictEqual(graph.edges.size, 7);
  });

  it('test predecessors', () => {
    assert.deepStrictEqual(new Set(graph.getPredecessors(1)), new Set([1, 4]));
  });
  it('test successors', () => {
    assert.deepStrictEqual(new Set(graph.getSuccessors(1)), new Set([1, 2]));
  });
  it('test equals', () => {
    const n = new Set<string>(['11', 'a', '3', '4']);
    const r = RelationOn.fromSet(
      new Set([
        new OrderedPair('11', 'a'),
        new OrderedPair('a', '3'),
        new OrderedPair('11', '11'),
        new OrderedPair('3', '4'),
        new OrderedPair('a', '4'),
        new OrderedPair('4', '3'),
        new OrderedPair('4', '11'),
      ])
    );
    const g = new Graph<string>(n, r);
    assert.deepStrictEqual(graph.equals(g), true);
  });
  it('test path_search', () => {
    const path = graph.getPathBetween(2, 1);
    assert.deepStrictEqual(path, [2, 4, 1]);
  });
});
