let str = '31 45 12 67 34 86 23 37 19 41';

const arrNums = str.split(" "); // แยก string ออกมาเป็นคำๆ

console.log (arrNums)

// string => array of number

let result = arrNums.reduce ((acc, num) => {
    if (+num < 40) acc += +num;
    return acc;
} ,0);

console.log(result)