const takeUntil = function(array, callback) {
  let result = [];
  if (callback() === false) {
    let bad = array.filter(callback);
    let index = array.indexOf(bad[0]);
    result = array.slice(0, index);
  }
  return result;
};
module.exports = takeUntil;