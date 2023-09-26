// const middle = require('../middle');
const assert = require('chai').assert;
const middle = require('../middle');
const eqArrays = require('../eqArrays');
describe('#middle', () => {
  it('returns [4] given [1, 2, 3, 4, 5, 6, 7]', () =>{
    assert.isTrue(eqArrays(middle([1, 2, 3, 4, 5, 6, 7]), [4]));
  });
  it('returns [4, 5] given [1, 2, 3, 4, 5, 6, 7, 8]', () =>{
    assert.isTrue(eqArrays(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]));
  });
});