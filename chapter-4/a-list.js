const arrayToList = (array) => {
    let list = null;
    for (let i = array.length - 1; i >= 0 ; i--) {
        // console.log(array[i]);
        list = {value: array[i], rest: list};
    }
    return list;
}

// console.log(arrayToList([10, 20, 30]));

const listToArray = (list) => {
    let newArray = [];
    for (let ; list.rest = null; ) {
        newArray.push(list.value); 
        return newArray;
    }
}

console.log(listToArray(arrayToList([10, 20, 30])));