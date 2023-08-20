let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

// Array => Obj

const initObj = {}

function reducerFn(acc,name,index,arr) {
 // acc === {'Jack'}
 // ยังไม่เคยมีชื่อใน Obj => เพิ่มชื่อ key และ value เป็น 1
 // มีชื่อใน Obj อยู่แล้ว => update value เพิ่มขึ้น 1

 // acc['Jack'] === acc[name]
 
 // #1
//  if (!acc[name]) {
//     acc[name] = 1
//  } else {
//     acc[name]++;
//  } 

// #2
if (!acc[name]) acc[name] = 0;
acc[name]++
return acc;
}

const r = names.reduce(reducerFn,initObj);
console.log(r);