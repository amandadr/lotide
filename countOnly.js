const countOnly = function(allItems, itemsToCount) {
  let result = {};
  if (allItems.length < 1) {
    return "Nothing to count from!";
  }
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
  }
  if (Object.keys(result) < 1) {
    result = "No items to count inputted.";
  }
  return result;
};
module.exports = countOnly;