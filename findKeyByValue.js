function assertEqual(actual, expected) {
  const passed = actual + ' === ' + expected;
  const failed = actual + ' !== ' + expected;
  if (actual === expected) {
    console.log('✔✔✔Assertion Passed: ' + passed);
  } else {
    console.log('❌❌❌Assertion Failed: ' + failed);
  }
}
const findKeyByValue = function(obj, val) {
//scan the object, return the first key which contains the value
//if no key has the value, return undefined
//iterate trough the object's values:
  for (const key in obj) {
  //create value:
    const value = obj[key];
    //test if the value is the same as val:
    if (value === val) {
      return key;
    }
  }
  return undefined;
};