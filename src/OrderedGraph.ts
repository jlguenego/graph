export class OrderedGraph<T> {
  constructor(public nodes: Set<T>, public map: Map<T, T[]>) {}
}
