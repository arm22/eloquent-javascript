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
 * @return {Numnber} result
 */
function reliableMultiply (a, b) {
  try {
    return primitiveMultiply(a, b);
  } catch (error) {
    if (error instanceof MultiplicatorUnitFailure) {
      for (;;) {
        try {
          primitiveMultiply(a, b);
          break;
        } catch (error) {
          throw error;
        }
      }
    } else {
      throw error;
    }
  }
}

// Exercise #1
console.log(reliableMultiply(8, 8));
