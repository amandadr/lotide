function eqArrays(a, b) {
  let result;
  //first indictaor should be length:
  if (a.length != b.length) {
    result = false;
    return result;
  }
  //iterate over the contents of each a and b, pushing each element into corresponding
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      result = false;
    } else {
      result = true;
    }
  }
  return result;
}
function isOdd(num) {
  return num % 2 > 0;
}
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