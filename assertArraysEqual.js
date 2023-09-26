const eqArrays = require('./eqArrays');
const assertArraysEqual = function(arr1, arr2) {
  const passed = arr1 + ' === ' + arr2;
  const failed = arr1 + ' !== ' + arr2;
  if (eqArrays(arr1, arr2) === true) {
    console.log('✔✔✔Assertion Passed: ' + passed);
    return true;
  } else {
    console.log('❌❌❌Assertion Failed: ' + failed);
    return false;
  }
};
module.exports = assertArraysEqual;