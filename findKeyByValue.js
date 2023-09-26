const findKeyByValue = function(obj, val) {
  let result = Object.keys(obj).find(key => obj[key] === val);
  if (result === undefined) {
    return "No object to search!";
  }
  return result;
};
module.exports = findKeyByValue;