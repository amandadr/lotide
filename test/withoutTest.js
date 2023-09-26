const assert = require('chai').assert;
const without = require('../without');
const eqArrays = require('../eqArrays');
describe('#without', () => {
  it('returns ["big", "dog"] given ["the", "big", "dog"], ["the"]', () => {
    assert.isTrue(eqArrays(without(["the", "big", "dog"], ["the"]), ["big", "dog"]));
  });
  it('returns [1, 2, 4] given [1, 2, 3, 4], [3]', () => {
    assert.isTrue(eqArrays(without([1, 2, 3, 4], [3]), [1, 2, 4]));
  });
});