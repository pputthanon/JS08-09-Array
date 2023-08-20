// #1
// const array1 = [1, 2, 30, 400];
// let result = array1.map(array1 => array1 *2);
// console.log(result)

// #2
// const array = [1, 2, 3, 4];
// let result = array.map (arr => String(arr));
// console.log(result)


// #3
// const array = [1, '1', 2, {}];
// let result = array.map (arr => typeof arr);
// console.log(result);

// #4
// const array = ['apple', 'banana', 'orange'];
// let result = array.map (arr => arr.toUpperCase())
// console.log(result)

// #5
// const array = [1, 3, 4, 5, 6, 7, 8];
// let result = array.map (arr => {
//     if (arr % 2 == 0) {
//         return "even";
//     } return "odd"
// })
// console.log(result)

// #6
// const array = [1, -3, 2, 8, -4, 5];
// let result = array.map (arr => {
//         if (arr < 0) {
//             return arr * -1 ;
//         } return arr
//     })
// console.log(result)

// #7
// const array = [100, 200.25, 300.84, 400.3];
// let result = array.map (arr => arr.toFixed(2));
// console.log(result)

// #8
// const array = [0, 5, 10, 7, 6, 5, 0];
// const months = ["Jan",'Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov',"Dec"]
// let result = array.map (monthIndex => months[monthIndex])
// console.log(result)

// #9
// const array = [1, 16, 81, 256, 625, 1296];
// const newArray = array.map((n) => Math.sqrt(Math.sqrt(n)));
// console.log(newArray);

//#10
// const array = [
//     { name: 'apple', age: 14 },
//     { name: 'banana', age: 18 },
//     { name: 'watermelon', age: 32 }
//   ];

//   const newArray = array.map(function(fruitObj){
//     return fruitObj.name;
//   })
//   console.log(newArray);

// #11
// const array = [
//     { name: 'apple', age: 14 },
//     { name: 'banana', age: 18 },
//     { name: 'watermelon', age: 32 }
//   ];

//   const newArray = array.map(function(fruitObj){
//     return fruitObj.age;
//     })
//     console.log(newArray);

// #12
const array = [
    { name: 'apple', surname: 'London' },
    { name: 'banana', surname: 'Bangkok' },
    { name: 'watermelon', surname: 'Singapore' }
  ];
  const newArray = array.map(function(nameObj){
    return nameObj.name + " " + nameObj.surname;
    })
    console.log(newArray);

// #13
// const array = [
//     { name: 'apple', birth: '2000-01-01' },
//     { name: 'banana', birth: '1990-10-01' },
//     { name: 'watermelon', birth: '1985-12-01' }
//   ];

// const newArray = array.map(function(fruitObj){
//     // creat NewFruit Object
//     const newFruitObj = Object.assign({}, fruitObj);
//     const birthYear = +fruitObj.birth.slice(0,4);
//     newFruitObj.age = 2021 - birthYear;
//     return newFruitObj;
// })

// console.log(newArray);

// #14
// const array = [
//     { name: 'apple', birth: '2000-01-01' },
//     { name: 'banana', birth: '1990-10-10' },
//     { name: 'watermelon', birth: '1985-12-30' }
//   ];

//   // input = JS-Obj : { name: 'apple', birth: '2000-01-01' }
//   // output = string HTML-Obj : "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//   const months = ["Jan",'Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov',"Dec"]
//   const newArray = array.map (function(obj) {
//     // retrieve value from each obj
//     let name = obj.name;
//     const day = obj.birth.slice(-2);
//     const monthIndex = obj.birth.slice(-5,-3) -1;
//     const year = obj.birth.slice(0,4);
//     // create String
//     const resultString = `<tr><td> ${name} <td> <td>${day} ${months[monthIndex].toLowerCase()} ${year}</td></tr>`;
//     return resultString;
//   })

//   console.log(newArray);
