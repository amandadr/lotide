const findKey = function(object, callback) {
  //scan the object:
  for (const key in object) {
    //return the first key for which the callback returns a truthy value...
    if (callback(object[key]) === true) {
      const result = key;
      return result;
    }
  }
  //if no key is found, return undefined
  return undefined;
};
