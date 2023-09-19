function assertEqual(actual, expected) {
  const passed = actual + ' === ' + expected;
  const failed = actual + ' !== ' + expected;
  if (actual === expected) {
    console.log('✔✔✔Assertion Passed: ' + passed);
  } else {
    console.log('❌❌❌Assertion Failed: ' + failed);
  }
} 
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