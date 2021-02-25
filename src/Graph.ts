import {RelationOn} from '@jlguenego/set';

export class Graph<T> {
  get size() {
    return this.nodeset.size;
  }
  constructor(public nodeset: Set<T>, public relation: RelationOn<T>) {}
}
