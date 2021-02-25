import {Sets} from '@jlguenego/set';

export class Bijection<T, U> {
  static getAll<T, U>(s1: Set<T>, s2: Set<U>): Bijection<T, U>[] {
    if (s1.size === 0) {
      return [new Bijection(new Map())];
    }
    const result: Bijection<T, U>[] = [];
    const a = s1.values().next().value as T;
    const r1 = Sets.difference(s1, new Set([a]));
    for (const b of s2) {
      const r2 = Sets.difference(s2, new Set([b]));
      const bijections = Bijection.getAll(r1, r2);
      bijections.forEach(bi => bi.map.set(a, b));
      result.push(...bijections);
    }

    return result;
  }
  constructor(public map: Map<T, U>) {}

  get(a: T): U {
    return this.map.get(a) as U;
  }
}
