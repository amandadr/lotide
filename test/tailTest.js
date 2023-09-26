const assert = require('chai').assert;
const tail = require('../tail');
const eqArrays = require('../eqArrays');
describe('#tail', () => {
  it('returns [2, 3] for [1, 2, 3]', () => {
    assert.isTrue(eqArrays(tail([1, 2, 3]), [2, 3]));
  });
  it('returns ["tall", "child"] for ["hello", "tall", "child"]', () => {
    assert.isTrue(eqArrays(tail(["hello", "tall", "child"]), ["tall", "child"]));
  });
});