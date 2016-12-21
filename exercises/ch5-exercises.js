// Require ancestry data
var ANCESTRY_FILE = JSON.parse(require('../dat/ancestry'));

/**
 * HELPER FUNCTION
 * average() reduces an array of numbers to their average
 * @param {Array} array
 * @return {Number} average
 */
function average (array) {
  function plus (a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

/**
 * HELPER OBJECT
 * creates a byName object that associates a persons name and their respective object
 */
var byName = {};
ANCESTRY_FILE.forEach(function (person) {
  byName[person.name] = person;
});

/**
 * Exercise #1
 * use reduce() and concat() to turn a 2d array into a 1d array
 */
var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function (flat, current) {
  return flat.concat(current);
}, []));

/**
 * Exercise #2
 * hasKnownMother() is used to filter ancestry by people that have known mothers
 *
 * @param {Object} person
 * @return {Object} childWithMother
 */
function hasKnownMother (person) {
  return byName[person.mother];
}

/**
 * birthAge() returns the age of a persons mother when the parameterized person was born
 *
 * @param {Object} person
 * @return {Number} age
 */
function birthAge (person) {
  var childBorn = person.born;
  var motherBorn = byName[person.mother].born;
  return childBorn - motherBorn;
}

console.log(average(ANCESTRY_FILE.filter(hasKnownMother).map(birthAge)));

/**
 * Exercise #3
 * groupBy() abstracts grouping the parameterized array by the parameterized grouping function
 * and returns the grouped object
 *
 * @param {Array} array
 * @param {Function} grouping
 * @return {Object} group
 */
function groupBy (array, grouping) {
  var group = {};
  array.forEach(function (person) {
    var currGroup = grouping(person);
    if (group.hasOwnProperty(currGroup)) {
      group[currGroup].push(person);
    } else {
      group[currGroup] = [person];
    }
  });
  return group;
}

// Build a group for each century
var centuryGroup = groupBy(ANCESTRY_FILE, function (person) {
  return Math.ceil(person.died / 100);
});

// Calculate and print the average for each century
for (var century in centuryGroup) {
  console.log(century + ':', average(centuryGroup[century].map(function (person) {
    return person.died - person.born;
  })));
}

/**
 * Exercise #4
 * every() checks if all elements in the parameterized array pass the predicate function
 *
 * @param {Array} array
 * @param {Function} pred
 * @return {Boolean} res
 */
function every (array, pred) {
  for (var i = 0; i < array.length; i++) {
    if (!pred(array[i])) {
      return false;
    }
  }
  return true;
}

/** some() checks if any elements in the parameterized array pass the predicate function
 *
 * @param {Array} array
 * @param {Function} pred
 * @return {Boolean} res
 */
function some (array, pred) {
  for (var i = 0; i < array.length; i++) {
    if (pred(array[i])) {
      return true;
    }
  }
  return false;
}

// Exercise #4
console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));
