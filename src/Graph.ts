import {OrderedPair, RelationOn} from '@jlguenego/set';

export class Graph<T> {
  edges: Set<OrderedPair<T, T>>;

  get size() {
    return this.nodeset.size;
  }

  constructor(public nodeset: Set<T>, relation: RelationOn<T>) {
    this.edges = relation.getSet(nodeset);
  }
}
