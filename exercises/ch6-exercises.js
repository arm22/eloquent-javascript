/**
 * Exercise #1
 * Vector is an Object that represents a 2D vector
 *
 * @param {Number} x
 * @param {Number} y
 */
function Vector (x, y) {
  this.x = x;
  this.y = y;
}

  /**
   * plus() returns a new vector that is an addition of two vectors
   *
   * @param  {Vector} vect
   * @return {Vector} vector
   */
Vector.prototype.plus = function (vect) {
  return new Vector((this.x + vect.x), (this.y + vect.y));
};

  /**
   * minus() returns a new vector that is the difference between two vectors
   *
   * @param  {Vector} vect
   * @return {Vector}
   */
Vector.prototype.minus = function (vect) {
  return new Vector((this.x - vect.x), (this.y - vect.y));
};

Object.defineProperties(Vector.prototype, {
  'length': {
    'get': function () {
      return (Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
    }
  }
});

/**
 * Exercise #2
 * StretchCell is an object representing a stretched cell in the table
 *
 * @param {Cell} inner
 * @param {Number} width
 * @param {Number} height
 */
function StretchCell (inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}

StretchCell.prototype.minWidth = function () {
  return this.inner.minWidth();
};

StretchCell.prototype.minHeight = function () {
  return this.inner.minHeight() + 1;
};

StretchCell.prototype.draw = function (width, height) {
  return this.inner.draw(width, height - 1).concat([repeat(' ', width)]);
};

/**
 * HELPER FUNCTION
 * repeat() repeats a string a given number of times
 *
 * @param  {String} string
 * @param  {Number} times
 * @return {String}
 */
function repeat (string, times) {
  var result = '';
  for (var i = 0; i < times; i++) {
    result += string;
  }
  return result;
}

/**
 * HELPER FUNCTION
 * TextCell represents a cell of text within a table
 *
 * @param {string} text
 */
function TextCell (text) {
  this.text = text.split('\n');
}

TextCell.prototype.minWidth = function () {
  return this.text.reduce(function (width, line) {
    return Math.max(width, line.length);
  }, 0);
};

TextCell.prototype.minHeight = function () {
  return this.text.length;
};

TextCell.prototype.draw = function (width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || '';
    result.push(line + repeat(' ', width - line.length));
  }
  return result;
};

/**
 * Exercise #3
 * Interface to an array sequence that iterates an array
 *
 * @param {Array} arr
 */
function ArraySeq (arr) {
  this.pos = -1;
  this.array = arr;
}

/**
 * next() returns a boolean indicating if there is a next element in the Array sequence
 *
 * @return {Boolean}
 */
ArraySeq.prototype.next = function () {
  if (this.pos >= this.array.length - 1) {
    return false;
  }
  this.pos++;
  return true;
};

/**
 * current() returns the current element in the Array sequence
 *
 * @return {Element}
 */
ArraySeq.prototype.current = function () {
  return this.array[this.pos];
};
/**
 * Interface to an range sequence that iterates a RangeSeq
 *
 * @param {Number} beg
 * @param {Number} end
 */
function RangeSeq (beg, end) {
  this.pos = beg - 1;
  this.to = end;
}

/**
 * next() returns a boolean indicating if there is a next element in the Range sequence
 *
 * @return {Boolean}
 */
RangeSeq.prototype.next = function () {
  if (this.pos >= this.beg) {
    return false;
  }
  this.pos++;
  return true;
};
/**
 * current() returns the current element in the Range sequence
 *
 * @return {Element}
 */
RangeSeq.prototype.current = function () {
  return this.pos;
};

/**
 * logFive() logs up to five elements in a sequence
 *
 * @param  {Sequence} sequence
 */
function logFive (sequence) {
  for (var i = 0; i < 5; i++) {
    if (!sequence.next()) {
      break;
    }
    console.log(sequence.current());
  }
}

// Exercise #1
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);

// Exercise #2
var sc = new StretchCell(new TextCell('abc'), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));

// Exercise #3
logFive(new ArraySeq([1, 2]));
logFive(new RangeSeq(100, 1000));
