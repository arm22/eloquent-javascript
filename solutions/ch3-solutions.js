// Exercise #1
function min (a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

// Exercise #2
function isEven (n) {
  if (n === 0) { return true; } else if (n === 1) {
    return false;
  } else if (n < 0) {
    return isEven(-n);
  } else { return isEven(n - 2); }
}

// Exercise #3
function countChar (string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs (string) {
  return countChar(string, 'B');
}

// Exercise #1
console.log(min(0, 10));
console.log(min(0, -10));

// Exercise #2
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-2));

// Exercise #3
console.log(countBs('BBC'));
console.log(countChar('kakkerlak', 'k'));
