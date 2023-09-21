//take: an array to map, a callback function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  //return: a new array based on the resuts of callback
  return results;
}