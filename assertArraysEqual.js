function eqArrays(a, b) {
  //first indictaor should be length:
  if (a.length != b.length) {
    let result = false;
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
function assertArraysEqual(arr1, arr2) {
  const passed = arr1 + ' === ' + arr2;
  const failed = arr1 + ' !== ' + arr2;
  if (eqArrays(arr1, arr2) === true) {
    return '✔✔✔Assertion Passed: ' + passed;
  } else {
    return '❌❌❌Assertion Failed: ' + failed;
  }
}