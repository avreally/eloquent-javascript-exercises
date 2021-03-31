// const min = (a, b) => {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

const min = (a, b) => {
    return a < b ? a : b;
}

// const min = (a, b) => a < b ? a : b;

// console.log(min(0, 10));
console.log(min(0, -10));
console.log('=====================');
console.log(min(2, 5));
console.log('=====================');
console.log(min(5, 0));
console.log('=====================');
console.log(min(-10, 4));
console.log('=====================');
console.log(min(-10, -10));


