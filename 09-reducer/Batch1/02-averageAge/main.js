let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];
console.log(arr)

function getAverageAge(arr) {
    const sumAge = arr.reduce ((a,c) => a + c.age,0);
    return sumAge / arr.length;
}


console.log(getAverageAge(arr));