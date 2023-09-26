const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const without = function(source, itemsToRemove) {
  //create an empty object and new array to hold the new array
  let result = source;
  //if source and items are equal, return assertEqual (a print)
  if (eqArrays(source, itemsToRemove) === true) {
    return (assertArraysEqual(source, itemsToRemove)) + ", you removed it all!";
  }
  //for each item of itemsToRemove, if the indexOf() = the item, remove(splice()) that element
  for (const item of itemsToRemove) {
    result = result.filter(value => value !== item);
  }
  return result;
};
module.exports = without;