// const range = (start, end) => {
//     let numbers = [];
//     for ( ; start < (end + 1); start++) {
//         numbers.push(start);
//     }
//     return numbers;
// };

const range = (start, end, step = 1) => {
    let numbers = [];
    if (start < end) {
        for (let i = start; i <= end; i += step) {
            numbers.push(i);
        }        
    } else {
        for (let i = start; i >= end; i += step) {
            numbers.push(i);
        }    
    }
    return numbers;
};

const sum = (array) => {
    let result = 0;
    for (let n of array) {
        result += n;
    }
    return result;
}

console.log(sum(range(1, 10, 2)));


// const range = (start, end, step = 1) => {
//     let numbers = [];
//     for (let i = start; i <= end; i += step) {
//         numbers.push(i);
//     }
//     return numbers;
// };



// console.dir(range(1, 10));
// console.dir(range(1, 10, 2));
// console.dir(range(5, 2, -1));
// console.log(1);