/**
 * Exercise #1
 * loopingTriangle() prints a triangle of '#' characters
 */
function loopingTriangle() {
    var line = '';
    for (var i = 0; i < 7; i++) {
        line += '#';
        console.log(line);
    }
}

/**
 * Exercise #2
 * fizzBuzz() prints numbers 1 to 100 except 'fizz' for numbers
 * divisible by 3 and 'buzz' for numbers divisible by 5
 */
function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        if (!(i % 3) && !(i % 5)) {
            console.log('FizzBuzz');
        } else if (!(i % 3)) {
            console.log('Fizz');
        } else if (!(i % 5)) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

/**
 * Exercise #3
 * chessBoard() prints a square chess board based on the variable 'size'
 *
 * @param {Number} size
 */
function chessBoard(size) {
    var board = ''
    for (var i = 0; i < size; i ++) {
        for (var j = 0; j < size; j++) {
            if (!((i + j) % 2)) {
                board += ' ';
            } else {
                board += '#';
            }
        }
        board += '\n';
    }
    console.log(board);
}

loopingTriangle();
fizzBuzz();
chessBoard(12);
