let arrays = [[1, 2, 3], [4, 5], [6]];
const reducer = (accumulator, currentValue) => accumulator.concat(currentValue);
let newArray = arrays.reduce(reducer);
console.log(newArray);
