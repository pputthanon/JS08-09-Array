// (array) => new Array


const arr = [2, 3, 5, 7, 11] // len = 5


function squareArr() {
    // start reuse logic
const newArr = [] // len = 5

for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] ** 2)
}
// consloe.log(newArr)
return newArr;
// End reuse logic
}

let newArray = squareArr(arr);

console.log(arr);
console.log(newArray);