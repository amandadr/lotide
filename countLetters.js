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
  function sum(obj) {
    return Object.keys(obj).reduce((sum,key)=>sum + parseFloat(obj[key] || 0),0);
  }
  return sum(result);
};
module.exports = countLetters;