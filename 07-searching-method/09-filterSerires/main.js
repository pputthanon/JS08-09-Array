// #1
// const array = [9, 17, 23, 5];
// let result = array.filter (num => num > 10);
// console.log(result);

// #2
// const array = [1, 2, 3, 4];
// let result = array.filter (num => num % 2 !== 0)
// console.log(result);

// #3
// const array = [1, '1', 2, {}];
// let result = array.filter(num => typeof num === "number");
// console.log(result);

// #4
// const array = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
// let result = array.filter (alp => alp.length > 6)
// console.log(result);

// #5
// const array = [1, -3, 2, 8, -4, 5];
// let result = array.filter (n => n > 0)
// console.log(result);

// #6
// const array = [1, 3, 4, 5, 6, 7, 8];
// let result = array.filter (num => num % 3 === 0)
// console.log(result);

// #7
// const array = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
// const newArray = array.filter ((animal) => animal[0]=== "E")
// console.log(newArray);

// #8
// const array = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// const newArray = array.filter (fruit => fruit === fruit.toUpperCase())
// console.log(newArray);

// #9 
// const array = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];
// const newArray = array.filter(province => province.toLowerCase().includes('buri'))
// console.log(newArray);

// #10
// const array = [
//     { name: 'Ben', age: 14 },
//     { name: 'Phil', age: 18 },
//     { name: 'John', age: 32 },
//     { name: 'Ann', age: 16 },
//     { name: 'Paul', age: 24 }
//   ];

//   const newArray = array.filter((obj) => obj.age >= 18);
//   console.log(newArray);

// #11
// const array = [
//     { id: 1, name: 'Pepsi' },
//     { id: 2, name: 'Mirinda' },
//     { id: 3, name: 'Coke' },
//     { id: 4, name: 'Fanta' },
//     { id: 5, name: 'Sprite' }
//   ];

//   const newArray = array.filter((obj) => obj.id != 4);
//   console.log(newArray);

// #12
// const array = [
//     { name: 'John', birth: '2001-07-31' },
//     { name: 'Jack', birth: '1990-06-24' },
//     { name: 'Jim', birth: '1984-12-13' },
//     { name: 'Jeff', birth: '1996-02-05' },
//     { name: 'Joe', birth: '2002-06-13' }
//   ];

//   function filterFn (personObj, index, array) {
//     const month = +personObj.birth.slice(5,7)
//     if (month === 6) return true;
//     else return false;
//   }

//   const filterLists = array.filter(filterFn);

//   console.log(filterLists);