// const countBs = (string) => {
//     let num = string.length;
//     let numberOfBs = 0;
//     for (let i = 0; i < num; i++) {
//         if (string[i] === 'B') {
//             numberOfBs += 1;
//         }
//     }
//     return numberOfBs;
// }

const countBs = (string) => {
    const numberOfBs = countChar(string, 'B');
    return numberOfBs;
}

const countChar = (str, x) => {
    let length = str.length;
    let numberOfXs = 0;
    for (let n = 0; n < length; n++) {
        if (str[n] === x) {
            numberOfXs += 1;
        }
    }
    return numberOfXs;
}

console.log(countBs('heBliBo'));
console.log(countBs('omnijuk'));
console.log(countChar('kakkerlak', 'k'));