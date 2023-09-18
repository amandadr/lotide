function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('✔✔✔Assertion Passed: ' + actual + ' === ' + expected);
  } else {
    console.log('❌❌❌Assertion Failed: ' + actual + ' !== ' + expected);
  }
}

assertEqual("Bootcamp", "Bootcmamp");
assertEqual(1, 1);