const assertEqual = function(actual, expected) {
  const passed = actual + ' === ' + expected;
  const failed = actual + ' !== ' + expected;
  if (actual === expected) {
    console.log('✔✔✔Assertion Passed: ' + passed);
    return true;
  } else {
    console.log('❌❌❌Assertion Failed: ' + failed);
    return false;
  }
};
module.exports = assertEqual;