const eqObjects = require('./eqObjects');
const assertObjectsEqual = function(actual, expected) {
  //to fix output:
  const inspect = require('util').inspect;
  //if actual and expected are equal, print happy; if not, print sad:
  const passed = (`Object1: '${inspect(actual)}`) + ' === ' + (`Object2: ${inspect(expected)}`);
  const failed = (`Object1: ${inspect(actual)}`) + ' !== ' + (`Object2: ${inspect(expected)}`);
  if (eqObjects(actual, expected)) {
    console.log('✔✔✔Assertion Passed: ' + passed);
    return true;
  } else {
    console.log('❌❌❌Assertion Failed: ' + failed);
    return false;
  }
};
module.exports = assertObjectsEqual;