const letterPositions = function(sentence) {
  //return an object with letters as keys and a value of indices of that letter in an array
  const result = {};
  //update result below:
  for (let i = 0; i < sentence.length; i++) {
    //if not seen before, create; if seen before add index to array
    if (!result[sentence[i]]) {
      result[sentence[i]] = [i];
    } else {
      result[sentence[i]].push(i);
    }
  }
  if (Object.keys(result) < 1) {
    return "No stirng input!";
  }
  return result;
};
module.exports = letterPositions;