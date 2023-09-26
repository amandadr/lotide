const assert = require('chai').assert;
const eqObjects = require('../eqObjects');
const countOnly = require('../countOnly');

describe('#countOnly', (() => {
  it('returns {a: 2} given ["a", "b", "a"], {"a": true}', () => {
    assert.isTrue(eqObjects(countOnly(['a', 'b', 'a'], {'a': true}), {a: 2}));
  });
  it('returns {a: 2, b: 1} given ["a", "b", "a"], {"a": true, "b": true}', () => {
    assert.isTrue(eqObjects(countOnly(['a', 'b', 'a'], {'a': true, 'b': true}), {a: 2, b: 1}));
  });
  it('returns {b: 1} given ["a", "b", "a"], {"a": false, "b": true}', () => {
    assert.isTrue(eqObjects(countOnly(['a', 'b', 'a'], {'a': false, 'b': true}), {b: 1}));
  });
  it('returns "No items to count inputted." given ["a", "b", "a"], {}', () => {
    assert.isTrue(eqObjects(countOnly(['a', 'b', 'a'], {}), "No items to count inputted."));
  });
  it('returns "Nothing to count from!" given [], {"a": true}', () => {
    assert.isTrue(eqObjects(countOnly([], {'a': true}), "Nothing to count from!"));
  });
}));