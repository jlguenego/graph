import {getDistinctCouples, OrderedPair, RelationOn} from '@jlguenego/set';
import {Bijection} from './Bijection';

export class Graph<T> {
  edges: Set<OrderedPair<T, T>>;

  get size() {
    return this.nodeset.size;
  }

  constructor(public nodeset: Set<T>, relation: RelationOn<T>) {
    this.edges = relation.getSet(nodeset);
  }

  *getPredecessors(a: T): IterableIterator<T> {
    for (const edge of this.edges) {
      if (edge.second !== a) {
        continue;
      }
      yield edge.first;
    }
  }

  *getSuccessors(a: T): IterableIterator<T> {
    for (const edge of this.edges) {
      if (edge.first !== a) {
        continue;
      }
      yield edge.second;
    }
  }

  getInDegree(a: T): number {
    return new Set(this.getPredecessors(a)).size;
  }

  getOutDegree(a: T): number {
    return new Set(this.getSuccessors(a)).size;
  }

  getBijectionWith<U>(graph: Graph<U>): Bijection<T, U> | undefined {
    if (this.nodeset.size !== graph.nodeset.size) {
      return undefined;
    }
    if (this.edges.size !== graph.edges.size) {
      return undefined;
    }
    // brut force. get all the possible bijections between the 2 nodesets.
    for (const bi of Bijection.getAll(this.nodeset, graph.nodeset)) {
      for (const a of this.nodeset) {
        for (const b of this.nodeset) {
          const r1 = this.edges.has(new OrderedPair(a, b));
          const r2 = graph.edges.has(new OrderedPair(bi.get(a), bi.get(b)));
          if ((r1 && !r2) || (r2 && !r1)) {
            return bi;
          }
        }
      }
    }
    return undefined;
  }

  equals<U>(graph: Graph<U>): boolean {
    return this.getBijectionWith(graph) !== undefined;
  }

  getPathBetween(a: T, b: T): T[] | undefined {
    const set = new Set<T>([a]);
    let previousSize = 0;
    let size = 1;
    let level = 1;
    while (previousSize < size) {
      const paths = this.getSuccessorPaths(a, level);
      for (const path of paths) {
        const ai = path[path.length - 1];
        if (ai === b) {
          return path;
        }
        set.add(ai);
      }
      previousSize = size;
      size = set.size;
      level++;
    }
    return undefined;
  }

  getSuccessorPaths(a: T, level: number): Set<T[]> {
    if (level === 0) {
      return new Set([[a]]);
    }
    const result = new Set<T[]>();
    for (const path of this.getSuccessorPaths(a, level - 1)) {
      const ai = path[path.length - 1];
      for (const aii of this.getSuccessors(ai)) {
        const pathi = [...path, aii];
        result.add(pathi);
      }
    }
    return result;
  }

  hasCycle(): boolean {
    for (const a of this.nodeset) {
      if (this.getPathBetween(a, a)) {
        return true;
      }
    }
    return false;
  }

  isStronglyConnected(): boolean {
    for (const {first: a, second: b} of getDistinctCouples(...this.nodeset)) {
      if (!this.getPathBetween(a, b)) {
        return false;
      }
    }
    return true;
  }

  isDAG(): boolean {
    for (const a of this.nodeset) {
      if (this.getPathBetween(a, a)) {
        return false;
      }
    }
    return true;
  }

  getBaseNodes(): Set<T> {
    return new Set([...this.nodeset].filter(a => this.getInDegree(a) === 0));
  }

  getLeaves(): Set<T> {
    return new Set([...this.nodeset].filter(a => this.getOutDegree(a) === 0));
  }

  isAccessible(a: T, b: T): boolean {
    return this.getPathBetween(a, b) !== undefined;
  }

  getDepth(a: T): number {
    const baseNodes = this.getBaseNodes();
    if (baseNodes.has(a)) {
      return 0;
    }
    let length = +Infinity;
    for (const b of baseNodes) {
      const path = this.getPathBetween(b, a);
      if (path !== undefined && path.length < length) {
        length = path.length;
      }
    }
    return length - 1;
  }

  getLevel(a: T): number {
    const leaves = this.getLeaves();
    if (leaves.has(a)) {
      return 0;
    }
    let length = +Infinity;
    for (const leaf of leaves) {
      const path = this.getPathBetween(a, leaf);
      if (path !== undefined && path.length < length) {
        length = path.length;
      }
    }
    return length - 1;
  }
}
