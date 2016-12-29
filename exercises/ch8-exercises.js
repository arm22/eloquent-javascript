// Exercise #1
function MultiplicatorUnitFailure () {}

function primitiveMultiply (a, b) {
  if (Math.random() < 0.5) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure();
  }
}

/**
 * reliableMultiply() wraps multiplication in a try/catch block
 *
 * @param  {Number} a
 * @param  {Number} b
 *
 * @return {Numnber} result
 */
function reliableMultiply (a, b) {
  try {
    return primitiveMultiply(a, b);
  } catch (error) {
    if (error instanceof MultiplicatorUnitFailure) {
      reliableMultiply(a, b);
    } else {
      throw error;
    }
  }
}

// Exercise #2
var box = {
  locked: true,
  unlock: function () {
    this.locked = false;
  },
  lock: function () {
    this.locked = true;
  },
  _content: [],
  get content () {
    if (this.locked) throw new Error('Locked!');
    return this._content;
  }
};

/**
 * withBoxUnlocked() performs the parameterized function on the box, with locking and unlocking
 *
 * @param  {function} body
 *
 * @return {[type]}      [description]
 */
function withBoxUnlocked (body) {
  if (!box.locked) {
    return box.unlock();
  }

  try {
    return body();
  } finally {
    box.lock();
  }
}

// Exercise #1
console.log(reliableMultiply(8, 8));

// Exercise #2
withBoxUnlocked(function () {
  box.content.push('gold piece');
});
try {
  withBoxUnlocked(function () {
    throw new Error('Pirates on the horizon! Abort!');
  });
} catch (e) {
  console.log('Error raised:', e);
}

console.log(box.locked);
