const isOdd = require('./isOdd');
const middle = function(arr) {
//create result array
  let result = [];
  //find the length of the array:
  let length = 0;
  length = arr.length;
  //length needs to be higher than two to find a middle:
  if (length < 3) {
    return [];
  } else if (isOdd(length)) {
  //if odd, find the middle element, push to reusult:
    let middleIndex = arr[(length - 1) / 2];
    result.push(middleIndex);
    //Done!
    return result;
  } else {
  //if even, find the two middle elements, push to result:
    let middleIndex = [arr[(length / 2) - 1], arr[length / 2]];
    result.push(middleIndex[0]);
    result.push(middleIndex[1]);
    //Done!
    return result;
  }
};
module.exports = middle;