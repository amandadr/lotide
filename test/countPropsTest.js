const assert = require('chai').assert;
const countProps = require('../countProps');

describe('#countProps', () => {
  it('returns 1 given {key: "val"}', () => {
    assert.strictEqual(countProps({key: "val"}), 1);
  });
  it('returns 0 given {}', () => {
    assert.strictEqual(countProps({}), 0);
  });
  it('returns 3 given {key: "val", key2: 4, key3: [1, 2, 3]}', () => {
    assert.strictEqual(countProps({key: "val", key2: 4, key3: [1, 2, 3]}), 3);
  });
});