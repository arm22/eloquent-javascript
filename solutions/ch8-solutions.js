// Exercise #1
function MultiplicatorUnitFailure () {}

function primitiveMultiply (a, b) {
  if (Math.random() < 0.5) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure();
  }
}

function reliableMultiply (a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure)) {
        throw e;
      }
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
function withBoxUnlocked (body) {
  var locked = box.locked;
  if (!locked) {
    return body();
  }

  box.unlock();
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
