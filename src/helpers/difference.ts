// Performs difference operation between
// called set and otherSet
// @ts-ignore
Set.prototype.difference = function (otherSet) {
  // creating new set to store difference
  var differenceSet = new Set();

  // iterate over the values
  for (var elem of this) {
    // if the value[i] is not present
    // in otherSet add to the differenceSet
    if (!otherSet.has(elem))
      differenceSet.add(elem);
  }

  // returns values of differenceSet
  return differenceSet;
};
