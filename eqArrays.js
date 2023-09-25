function eqArrays(a, b) {
  //first indictaor should be length:
  if (a.length != b.length) {
    return false;
  }
  //iterate over the contents of each a and b, pushing each element into corresponding
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
module.exports = eqArrays;