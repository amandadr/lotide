const assert = require('chai').assert;
const letterPositions = require('../letterPositions');
const eqObjects = require('../eqObjects');

describe('#letterPostitions', () => {
  it('returns { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] } given "hello"', () => {
    assert.isTrue(eqObjects(letterPositions('hello'), { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }));
  });
  it('returns "No stirng input!" if given ""', () => {
    assert.strictEqual(letterPositions(""), "No stirng input!");
  });
});