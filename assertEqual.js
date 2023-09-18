function assertEqual(actual, expected) {
  const passed = actual + ' === ' + expected;
  const failed = actual + ' !== ' + expected;
  if (actual === expected) {
    console.log('✔✔✔Assertion Passed: ' + passed);
  } else {
    console.log('❌❌❌Assertion Failed: ' + failed);
  }
}

assertEqual("Bootcamp", "Bootcmamp");
assertEqual(1, 1);