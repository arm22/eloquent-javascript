/**
 * Exercise #1
 * range() constructs an array of Numbers from param1 to param2 inclusive stepping
 * by 1 or the optional step parameter
 *
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 * @return {Array} list
 */
function range (start, end, step) {
  var list = [];
  if (step === undefined && start > end) {
    step = -1;
  } else if (step === undefined) {
    step = 1;
  }
  if (step > 0) {
    for (var i = start; i <= end; i += step) {
      list.push(i);
    }
  } else {
    for (var j = start; j >= end; j += step) {
      list.push(j);
    }
  }
  return list;
}

/**
 * sum() returns the sum of values in the parameterized array
 *
 * @param {Array} nums
 * @return {Number} sum
 */
function sum (nums) {
  var sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

/**
 * Exercise #2
 * reverseArray() takes an array and returns a new array which is the reversed version of the param
 * @param {Array} list
 * @return {Array} rev
 */
function reverseArray (list) {
  var rev = [];
  for (var i = list.length - 1; i >= 0; i--) {
    rev.push(list[i]);
  }
  return rev;
}

/**
 * reverseArrayInPlace() takes an array and returns the modified array reversed
 *
 * @param {Array} list
 * @return {Array} rev
 */
function reverseArrayInPlace (list) {
  for (var i = 0; i < list.length / 2; i++) {
    var front = list[i];
    list[i] = list[list.length - 1 - i];
    list[list.length - 1 - i] = front;
  }
}

/**
 * Exercise #3
 * arrayToList() turns an array into a nested list
 *
 * @param {Array} arr
 * @return {Object} list
 */
function arrayToList (arr) {
  var list;
  for (var i = arr.length; i > 0; i--) {
    list = prepend(arr[i - 1], list);
  }
  return list;
}

/**
 * listToArray() turns a list into an arrayValue
 *
 * @param {List} list
 * @return {Object} arr
 */
function listToArray (list) {
  var arr = [];
  while (list) {
    arr.push(list.value);
    list = list.rest;
  }
  return arr;
}

/**
 * HELPER FUNCTION
 * prepend() adds the paramter element to the front of the parameter list
 *
 * @param {Element} el
 * @param {Object} list
 * @return {Object} newList
 */
function prepend (el, list) {
  var newList = {
    'value': el,
    'rest': list || null
  };
  return newList;
}

/**
 * HELPER function
 * nth() returns the value in the parameter list at the position parameter index
 *
 * @param {Object} list
 * @param {Number} index
 * @return {Object} el
 */
function nth (list, index) {
  if (index === 0) {
    return list.value;
  } else if (index === -1) {
    return undefined;
  } else {
    return nth(list.rest, index - 1);
  }
}

/**
 * deepEqual() checks if two parameter values are deep equal and returns a boolean
 *
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Boolean} eql
 */
function deepEqual (obj1, obj2) {
  if ((typeof obj1 === 'object' && obj1 != null) && (typeof obj2 === 'object' && obj2 != null)) {
    if (Object.keys(obj1).length === Object.keys(obj2).length) {
      for (var key in obj1) {
        if (obj2[key] === undefined) {
          return false;
        } else {
          return deepEqual(obj1[key], obj2[key]);
        }
      }
    }
  } else {
    return (obj1 === obj2);
  }
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

console.log(reverseArray(['A', 'B', 'C']));
var arrayValue = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));

var obj = {here: {is: 'an'}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: 'an'}, object: 2}));
