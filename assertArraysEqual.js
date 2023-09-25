const eqArrays = require('./eqArrays');
function assertArraysEqual(arr1, arr2) {
  const passed = arr1 + ' === ' + arr2;
  const failed = arr1 + ' !== ' + arr2;
  if (eqArrays(arr1, arr2) === true) {
    return '✔✔✔Assertion Passed: ' + passed;
  } else {
    return '❌❌❌Assertion Failed: ' + failed;
  }
}
module.exports = assertArraysEqual;