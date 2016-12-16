/**
 * Exercise #1
 * use reduce() and concat() to turn a 2d array into a 1d array
 */
var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function (flat, current) {
  return flat.concat(current);
}, []));
