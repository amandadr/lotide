const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it('returns 1 given "a"', () => {
    assert.strictEqual(countLetters("a"), 1);
  });
  it('returns 3 given "a"', () => {
    assert.strictEqual(countLetters("abc"), 3);
  });
  it('returns 0 given ""', () => {
    assert.strictEqual(countLetters(""), 0);
  });
});