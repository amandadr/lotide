const assert = require('chai').assert;
const map = require('../map');
const eqArrays = require('../eqArrays');

describe('#map', () => {
  it('returns [ 1, 2, 3, 4, 0 ] given ["a", "ab", "abc", "abcd", ""], word => word.length', () => {
    assert.isTrue(eqArrays(map(['a', 'ab', 'abc', 'abcd', ''], word => word.length), [1, 2, 3, 4, 0]));
  });
});

const wordss = ['a', 'ab', 'abc', 'abcd', ''];
const results2 = map(wordss, word => word.length);
console.log(results2);
