let output = '';
for (let n = 0; n < 8; n++) {
    for (let i = 0; i < 8; i++) {
        if (n % 2 == 0) {
            if (i % 2 == 0) {
                output = output + ' ';
            } else {
                output = output + '#';
            }
        } else {
            if (i % 2 == 0) {
                output = output + '#';
            } else {
                output = output + ' ';
            }
        }
    }
    output = output + '\n';
}
console.log(output);

console.log('==================');


// another version
let board = '';
for (let a = 0; a < 8; a++) {
    for (let b = 0; b < 8; b++) {
        if ((a+b) % 2 == 0) {
            board = board + ' ';
        } else {
            board = board + '#';
        }
    }
    board = board + '\n';
}
console.log(board);

console.log('==================');


// When you have a program that generates this pattern, 
// define a binding size = 8 and change the program so that it works 
// for any size, outputting a grid of the given width and height.
let chessboard = '';

let size = 12;

for (let a = 0; a < size; a++) {
    for (let b = 0; b < size; b++) {
        if ((a+b) % 2 == 0) {
            chessboard += ' ';
        } else {
            chessboard += '#';
        }
    }
    chessboard += '\n';
}
console.log(chessboard);