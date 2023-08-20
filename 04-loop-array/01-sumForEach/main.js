let sum = 0;

const array = [29, 17, 13, 47, 23, 31];

[29, 17, 13, 47, 23, 31].forEach ((a) => sum += a);

console.log(sum);

////////////////////////////////////////////

// for (let i = 0; i < array.length; i++) {
//     console.log (i,array[i]);
//     sum += array[i]; // 29, 17, 13, 47, 23, 31
// }

////////////////////////////////////////////
// for (let index in array) {
//     sum += array[index];
// }

/////////////////////////////////////////////
// for (let el of array) {
//     sum += el;
// }

/////////////////////////////////////////////