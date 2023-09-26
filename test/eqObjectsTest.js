const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
const yellowMultiColorShirtObject = { size: "medium", colors: ["yellow", "blue"] };



describe('#eqObjects', () => {
  it('returns true given shirtObject, anotherShirtObject', () => {
    console.log(shirtObject , anotherShirtObject);
    assert.isTrue(eqObjects(shirtObject , anotherShirtObject));
  });
  it('returns false given shirtObject, longSleeveShirtObject', () => {
    console.log(shirtObject, longSleeveShirtObject);
    assert.isFalse(eqObjects(shirtObject , longSleeveShirtObject));
  });
  it('returns true given multiColorShirtObject, anotherMultiColorShirtObject', () => {
    console.log(multiColorShirtObject, anotherMultiColorShirtObject);
    assert.isTrue(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject));
  });
  it('returns false given multiColorShirtObject, longSleeveMultiColorShirtObject', () => {
    console.log(multiColorShirtObject, longSleeveMultiColorShirtObject);
    assert.isFalse(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject));
  });
  it('returns false given multiColorShirtObject, yellowMultiColorShirtObject', () => {
    console.log(multiColorShirtObject, yellowMultiColorShirtObject);
    assert.isFalse(eqObjects(multiColorShirtObject, yellowMultiColorShirtObject));
  });
});