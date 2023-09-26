const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {
  it('returns [1, 2, 5, 7, 2] given [1, 2, 5, 7, 2, -1, 2], x => x < 0', () => {
    assert.isTrue(eqArrays(takeUntil([1, 2, 5, 7, 2, -1, 2], x => x < 0), [1, 2, 5, 7, 2]));
  });
  it('returns ["I\'ve", "been", "to", "Hollywood"] given ["I\'ve", "been", "to", "Hollywood", ",", "And"], x => x === ","', () => {
    assert.isTrue(eqArrays(takeUntil(["I've", "been", "to", "Hollywood", ",", "And"], (x => x === ',')), ["I've", "been", "to", "Hollywood"]));
  });
});