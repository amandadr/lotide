const countProps = require('./countProps');
const eqObjects = function(obj1, obj2) {
  if (typeof(obj1) !== typeof(obj2)) {
    return false;
  }

  if (typeof(obj1) === "function") {
    return obj1.toString() === obj2.toString();
  }

  if (obj1 instanceof Object && obj2 instanceof Object) {
    if (countProps(obj1) !== countProps(obj2)) {
      return false;
    }
    let result = true;
    for (key in obj1) {
      result = eqObjects(obj1[key], obj2[key]);
      if (!result) {
        return false;
      }
    }
    return true;
  } else {
    return obj1 === obj2;
  }
};
module.exports = eqObjects;