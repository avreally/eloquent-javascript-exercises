// const isEven = x => {
//     return x == 1 ? false 
//     : x == 0 ? true 
//     : isEven(x - 2);
// }

// console.log(isEven(50));
// console.log(isEven(75));

// Zero is even.
// One is odd.
// For any other number N, its evenness is the same as N - 2.

const isEven = x => {
    return x < 0 ? isEven(-x)
    : x == 1 ? false 
    : x == 0 ? true 
    : isEven(x - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-10));

// console.log(`${x} is less than 0, pick another number`)