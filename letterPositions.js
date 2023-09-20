const letterPositions = function(sentence) {
  //return an object with letters as keys and a value of indices of that letter in an array
  const results = {};
  //update results below:
  for (let i = 0; i < sentence.length; i++) {
    //if not seen before, create; if seen before add index to array
    let keys = results.keys;
    if (!results[sentence[i]]) {
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
  }
  return results;
};