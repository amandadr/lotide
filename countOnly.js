function assertEqual(actual, expected) {
  const passed = actual + ' === ' + expected;
  const failed = actual + ' !== ' + expected;
  if (actual === expected) {
    console.log('✔✔✔Assertion Passed: ' + passed);
  } else {
    console.log('❌❌❌Assertion Failed: ' + failed);
  }
}
const countOnly = function(allItems, itemsToCount) {
  //create empty object for result:
  let result = {};
  //iterate through array
  for (const key in itemsToCount) {
    //test if each key in the object matches item
    for (const item of allItems) {
      if (key === item) {
        //if not seen before, create; if seen before add one
        if (!result[key]) {
          result[key] = 1;
        } else {
          result[key] += 1;
        }
        //test if the value of the key if truthy - if so, add to the key counter:
        if (itemsToCount[key] === false) {
          delete result[key];
        }
      }
    }
  }
  return result;
};