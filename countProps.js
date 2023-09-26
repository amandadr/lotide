const countProps = function(obj) {
  let count = 0;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
};
module.exports = countProps;