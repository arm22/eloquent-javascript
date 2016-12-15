// Exercise #1
function range (start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step) {
      array.push(i);
    }
  } else {
    for (var j = start; j >= end; j += step) {
      array.push(i);
    }
  }
  return array;
}

function sum (array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

// Exercise #2
function reverseArray (array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

function reverseArrayInPlace (array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

// Exercise #3
function arrayToList (array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--) { list = {value: array[i], rest: list}; }
  return list;
}

function listToArray (list) {
  var array = [];
  for (var node = list; node; node = node.rest) { array.push(node.value); }
  return array;
}

function prepend (value, list) {
  return {value: value, rest: list};
}

function nth (list, n) {
  if (!list) {
    return undefined;
  } else if (n === 0) { return list.value; } else {
    return nth(list.rest, n - 1);
  }
}

// Exercise #4
function deepEqual (a, b) {
  if (a === b) return true;

  if (a == null || typeof a !== 'object' ||
      b == null || typeof b !== 'object') {
    return false;
  }

  var propsInA = 0;
  var propsInB = 0;

  for (var prop in a) {
    propsInA += 1;
  }

  for (var key in b) {
    propsInB += 1;
    if (!(key in a) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return propsInA === propsInB;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

console.log(reverseArray(['A', 'B', 'C']));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));

var obj = {here: {is: 'an'}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: 'an'}, object: 2}));
