const isOdd = require('../isOdd');
const assert = require('chai').assert;
describe('#isOdd', () => {
  it('returns true given 3', () => {
    assert.isTrue(isOdd(3));
  });
  it('returns true given "3"', () => {
    assert.isTrue(isOdd("3"));
  });
  it('returns false given 10', () => {
    assert.isFalse(isOdd(10));
  });
});