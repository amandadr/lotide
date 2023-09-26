const assert = require('chai').assert;
const assertEqualObjects = require('../assertObjectsEqual');

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
const yellowMultiColorShirtObject = { size: "medium", colors: ["yellow", "blue"] };



describe('#assertEqualObjects', () => {
  it('returns true given shirtObject, anotherShirtObject', () => {
    console.log(shirtObject , anotherShirtObject);
    assert.isTrue(assertEqualObjects(shirtObject , anotherShirtObject));
  });
  it('returns false given shirtObject, longSleeveShirtObject', () => {
    console.log(shirtObject, longSleeveShirtObject);
    assert.isFalse(assertEqualObjects(shirtObject , longSleeveShirtObject));
  });
  it('returns true given multiColorShirtObject, anotherMultiColorShirtObject', () => {
    console.log(multiColorShirtObject, anotherMultiColorShirtObject);
    assert.isTrue(assertEqualObjects(multiColorShirtObject, anotherMultiColorShirtObject));
  });
  it('returns false given multiColorShirtObject, longSleeveMultiColorShirtObject', () => {
    console.log(multiColorShirtObject, longSleeveMultiColorShirtObject);
    assert.isFalse(assertEqualObjects(multiColorShirtObject, longSleeveMultiColorShirtObject));
  });
  it('returns false given multiColorShirtObject, yellowMultiColorShirtObject', () => {
    console.log(multiColorShirtObject, yellowMultiColorShirtObject);
    assert.isFalse(assertEqualObjects(multiColorShirtObject, yellowMultiColorShirtObject));
  });
});