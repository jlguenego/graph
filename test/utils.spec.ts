import assert from 'assert';
import {OrderedPair} from '../src/OrderedPair';

describe('Utils Unit Test', () => {
  it('test memoize', () => {
    const a = new OrderedPair('1', 2);
    const b = new OrderedPair('1', 2);
    assert.deepStrictEqual(a === b, true);
  });
});
