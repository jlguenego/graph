import {OrderedPair, RelationOn} from '@jlguenego/set';
import {Bijection} from './Bijection';

export class Graph<T> {
  edges: Set<OrderedPair<T, T>>;

  get size() {
    return this.nodeset.size;
  }

  constructor(public nodeset: Set<T>, relation: RelationOn<T>) {
    this.edges = relation.getSet(nodeset);
  }

  getPredecessors(a: T): Set<T> {
    return new Set(
      [...this.edges].filter(edge => edge.second === a).map(edge => edge.first)
    );
  }

  getSuccessors(a: T): Set<T> {
    return new Set(
      [...this.edges].filter(edge => edge.first === a).map(edge => edge.second)
    );
  }

  getInDegree(a: T): number {
    return this.getPredecessors(a).size;
  }

  getOutDegree(a: T): number {
    return this.getSuccessors(a).size;
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
}
