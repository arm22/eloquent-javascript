/**
 * Exercise #1
 * min() returns the minimum number of the two params
 *
 * @param {Number} val1
 * @param {Number} val2
 * @return {Number} minimum
 */
function min (val1, val2) {
  if (val1 < val2) {
    return val1;
  }
  return val2;
}

/**
 * Exercise #2
 * isEven() recursively checks if the parameter is an even number
 *
 * @param {Number} val
 * @return {Boolean} isEven
 */
function isEven (val) {
  if (!val) {
    return true;
  } else if (val === 1) {
    return false;
  } else if (val < 0) {
    return isEven(-val);
  }
  return isEven(val - 2);
}

/**
 * Exercise #3
 * countBs() returns the number of 'B's in the parameter string
 *
 * @param {String} chunk
 * @return {Number} count
 */
function countBs (chunk) {
  var count = 0;
  for (var i = 0; i < chunk.length; i += 1) {
    if (chunk.charAt(i) === 'B') {
      count += 1;
    }
  }
  return count;
}

/**
 * countChar() returns the number of 'param' characters in the parameter string
 *
 * @param {String} chunk
 * @param {String} char
 * @return {Number} countChar
 */
function countChar (chunk, char) {
  var count = 0;
  for (var i = 0; i < chunk.length; i += 1) {
    if (chunk.charAt(i) === char) {
      count += 1;
    }
  }
  return count;
}

console.log(min(0, 10));
console.log(min(0, -10));

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-2));

console.log(countBs('BBC'));
console.log(countChar('kakkerlak', 'k'));
