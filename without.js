function eqArrays(a, b) {
  let result;
  //first indictaor should be length:
  if (a.length !== b.length) {
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
function assertArraysEqual(arr1, arr2) {
  const passed = arr1 + ' === ' + arr2;
  const failed = arr1 + ' !== ' + arr2;
  if (eqArrays(arr1, arr2) === true) {
    return '✔✔✔Assertion Passed: ' + passed;
  } else {
    return '❌❌❌Assertion Failed: ' + failed;
  }
}

function without(source, itemsToRemove) {
  //create an empty object and new array to hold the new array
  let result = source;
  //if source and items are equal, return assertEqual (a print)
  if (eqArrays(source, itemsToRemove) === true) {
    return (assertArraysEqual(source, itemsToRemove)) + ", you removed it all!";
  }
  //for each item of itemsToRemove, if the indexOf() = the item, remove(splice()) that element
  for (const item of itemsToRemove) {
    let element = result.indexOf(item);
    if (element > -1) {
      result.splice(element, 1);
    }
  }
  return result;
}