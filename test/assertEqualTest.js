const assert = require('chai').assert;
const assertEqual = require('../assertEqual.js');

describe('#assertEqual', () => {
  it('returns true given 12, 12', () => {
    assert.isTrue(assertEqual(12, 12));
  });
  it('returns true given \'hello\', \'hello\'', () => {
    assert.isTrue(assertEqual('hello', 'hello'));
  });
  it('returns false given 1, 12', () => {
    assert.isFalse(assertEqual(1, 12));
  });
  it('returns false given \'hello\', \'not hello\'', () => {
    assert.isFalse(assertEqual('hello', 'not hello'));
  });
});