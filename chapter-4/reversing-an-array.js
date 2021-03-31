const reverseArray = (array) => {
    let newArray = [];
    for (let i = (array.length - 1); i >= 0; i--){
        let element = array[i];
        newArray.push(element);
    }
    return newArray;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));

const reverseArrayInPlace = (someArray) => {
    for (let i = 1; i < someArray.length; i++) {
        let element = someArray[i];
        someArray.unshift(element);
        let index = i + 1;
        someArray.splice(index, 1);
    }
    return someArray;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6]));


// const reverseArray = (array) => {
//     let newArray = [];
//     for (let i = (array.length - 1); i >= 0; i--){
//         newArray.push(array[i]);
//     }
//     return newArray;
// }

// console.log(reverseArray([1, 2, 3, 4, 5]));
