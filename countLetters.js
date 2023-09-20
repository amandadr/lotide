function assertEqual(actual, expected) {
  const passed = actual + ' === ' + expected;
  const failed = actual + ' !== ' + expected;
  if (actual === expected) {
    console.log('✔✔✔Assertion Passed: ' + passed);
  } else {
    console.log('❌❌❌Assertion Failed: ' + failed);
  }
}
const countLetters = function(message) {
  //create empty object for result:
  let result = {};
  //iterate through the message:
  for (const letter of message) {
    //if not seen before, create; if seen before add one
    if (!result[letter]) {
      result[letter] = 1;
    } else {
      result[letter] += 1;
    }
  }
  return result;
};