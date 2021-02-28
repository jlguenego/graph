import {OrderedPair, RelationOn} from '@jlguenego/set';
import assert from 'assert';
import {Graph} from '../src';

describe('Graph Unit Test', () => {
  let nodeset: Set<number>;
  let relation: RelationOn<number>;
  let graph: Graph<number>;
  let dag: Graph<number>;
  let dag08: Graph<number>;
  let tree012: Graph<number>;

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

    dag = new Graph<number>(
      new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
      new RelationOn<number>((a, b) => a < b)
    );
    dag08 = new Graph<number>(
      new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
      RelationOn.fromSet(
        new Set([
          new OrderedPair(1, 8),
          new OrderedPair(1, 5),
          new OrderedPair(3, 6),
          new OrderedPair(3, 7),
          new OrderedPair(5, 8),
          new OrderedPair(5, 9),
          new OrderedPair(6, 9),
        ])
      )
    );

    tree012 = new Graph<number>(
      new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
      RelationOn.fromSet(
        new Set([
          new OrderedPair(1, 2),
          new OrderedPair(1, 5),
          new OrderedPair(2, 3),
          new OrderedPair(2, 4),
          new OrderedPair(5, 6),
          new OrderedPair(6, 7),
          new OrderedPair(6, 8),
          new OrderedPair(6, 9),
        ])
      )
    );
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
    assert.deepStrictEqual(graph.getPathBetween(2, 1), [2, 4, 1]);
    assert.deepStrictEqual(graph.getPathBetween(1, 1), [1, 1]);
    assert.deepStrictEqual(graph.getPathBetween(4, 4), [4, 3, 4]);
    assert.deepStrictEqual(graph.getPathBetween(2, 2), [2, 4, 1, 2]);
  });
  it('test cycle', () => {
    assert.deepStrictEqual(graph.hasCycle(), true);
  });
  it('test isStronglyConnected', () => {
    assert.deepStrictEqual(graph.isStronglyConnected(), true);
  });
  it('test isDAG_not', () => {
    assert.deepStrictEqual(graph.isDAG(), false);
  });
  it('test isDAG', () => {
    assert.deepStrictEqual(dag.isDAG(), true);
    assert.deepStrictEqual(dag08.isDAG(), true);
  });
  it('test isBaseNode', () => {
    assert.deepStrictEqual(dag.getBaseNodes(), new Set([1]));
    assert.deepStrictEqual(dag08.getBaseNodes(), new Set([1, 2, 3, 4]));
  });
  it('test isLeaf', () => {
    assert.deepStrictEqual(dag.getLeaves(), new Set([9]));
    assert.deepStrictEqual(dag08.getLeaves(), new Set([2, 4, 7, 8, 9]));
  });
  it('test isAccessible', () => {
    assert.deepStrictEqual(dag.isAccessible(1, 3), true);
    assert.deepStrictEqual(dag.isAccessible(3, 1), false);
  });
  it('test getDepth', () => {
    assert.deepStrictEqual(dag08.getDepth(9), 2);
    assert.deepStrictEqual(dag08.getDepth(1), 0);
    assert.deepStrictEqual(dag08.getDepth(2), 0);
    assert.deepStrictEqual(dag08.getDepth(5), 1);
  });
  it('test getLevel', () => {
    assert.deepStrictEqual(dag08.getLevel(9), 0);
    assert.deepStrictEqual(dag08.getLevel(1), 2);
    assert.deepStrictEqual(dag08.getLevel(2), 0);
    assert.deepStrictEqual(dag08.getLevel(3), 2);
    assert.deepStrictEqual(dag08.getLevel(5), 1);
  });
  it('test isTree', () => {
    assert.deepStrictEqual(tree012.isTree(), true);
  });
});
