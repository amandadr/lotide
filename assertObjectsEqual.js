function eqArrays(a, b) {
  let result;
  //first indictaor should be length:
  if (a.length != b.length) {
    result = false;
    return result;
  }
  //iterate over the contents of each a and b, pushing each element into corresponding
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      result = false;
    } else {
      result = true;
    }
  }
  return result;
}
const eqObjects = function(obj1, obj2) {
  //if the objects being compared are equal, return true; else, false
  //a variable to hold result:
  let result = false;
  //objects aren't identical if the amount of keys are different:
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  //iterate over the values of the keys in obj1:
  for (const key1 in obj1) {
    const val1 = obj1[key1];
    //iterate over each value of obj2, compare to val1
    for (const key2 in obj2) {
      const val2 = obj2[key2];
      if (Array.isArray(val1)) {
        if (val1 === val2) {
          result = true;
        }
      } else {
        if (val1 === val2) {
          result = true;
        }
      }
  }
}
  return result;
}
const assertObjectsEqual = function(actual, expected) {
  //to fix output:
  const inspect = require('util').inspect;
  //if actual and expected are equal, print happy; if not, print sad:
  const passed = (`Object1: '${inspect(actual)}`) + ' === ' + (`Object2: ${inspect(expected)}`);
  const failed = (`Object1: ${inspect(actual)}`) + ' !== ' + (`Object2: ${inspect(expected)}`);
  if (eqObjects(actual, expected) === true) {
    return '✔✔✔Assertion Passed: ' + passed;
  } else {
    return '❌❌❌Assertion Failed: ' + failed;
  }
}