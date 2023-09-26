const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  it('returns "aa" given ({aa: "a", bb: "b"}, "a")', () => {
    assert.strictEqual((findKeyByValue({aa: "a", bb: "b"}, "a")), 'aa');
  });
  it('returns "No object to search!" given ({}, "a")', () => {
    assert.strictEqual((findKeyByValue({}, "a")), "No object to search!");
  });
});