const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
describe('#assertArraysEqual', () => {
  it('returns true for [1, 2] and [1, 2]', () => {
    assert.isTrue(assertArraysEqual([1, 2], [1, 2]));
  });
  it('returns false for [1, 2] === [1, 2, 3]', () => {
    assert.isFalse(assertArraysEqual([1, 2], [1, 2, 3]));
  });
  it('returns false for [1, 2] === [1, 7]', () => {
    assert.isFalse(assertArraysEqual([1, 2], [1, 7]));
  });
});