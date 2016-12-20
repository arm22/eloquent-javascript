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
