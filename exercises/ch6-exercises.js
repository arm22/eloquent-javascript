// Require mountain data
//var MOUNTAINS = JSON.parse(require('../dat/mountains'));

/**
 * Vector is an Object that represents a 2D vector
 *
 * @param {Number} x
 * @param {Number} y
 */
function Vector (x, y) {
  this.x = x;
  this.y = y;

  /**
   * plus() returns a new vector that is an addition of two vectors
   * @param  {Vector} vect
   * @return {Vector} vector
   */
  this.plus = function (vect) {
    return new Vector((this.x + vect.x), (this.y + vect.y));
  };

  /**
   * minus() returns a new vector that is the difference between two vectors
   * @param  {Vector} vect
   * @return {Vector}
   */
  this.minus = function (vect) {
    return new Vector((this.x - vect.x), (this.y - vect.y));
  };

  Object.defineProperties(this, {
    'length': {
      'get': function () {
        return (Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
      }
    }
  });
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5
