import {Sets} from '@jlguenego/set';

export class Bijection<T, U> {
  static *getAll<T, U>(
    s1: Set<T>,
    s2: Set<U>
  ): IterableIterator<Bijection<T, U>> {
    if (s1.size === 0) {
      yield new Bijection(new Map());
      return;
    }
    const a = s1.values().next().value as T;
    const r1 = Sets.difference(s1, new Set([a]));
    for (const b of s2) {
      const r2 = Sets.difference(s2, new Set([b]));
      for (const bi of Bijection.getAll(r1, r2)) {
        bi.map.set(a, b);
        yield bi;
      }
    }
  }
  constructor(public map: Map<T, U>) {}

  get(a: T): U {
    return this.map.get(a) as U;
  }
}
