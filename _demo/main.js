const log = console.log;

log("Learning Array");

// ############################## Array Declaration ####################################
// Array Literal
// Element : สมาชิก
const friend = ['Bee','Non','Money','Seefah']
log(friend); // 'Bee', 'Non', 'Money', 'Seefah'


// Array Constructor
const height = new Array (140, 143, 145);
log(height); // 140, 143, 145


// Access, Modify, Add, Delete
// Bracket Notation with Index
// Index : start ที่ 0
log(friend[0]); // Bee
log(friend[2]); // Money
log(friend[-1]); // Undefined
log(friend[5]); // Undefined


// Update
friend [0] = 'Gold';
log(friend);

friend [2] = 'Orange';
log(friend);

// ถ้าพยายามอัพเดทใน index ที่ไม่มีอยู่จริง === add เพิ่มเข้าไป
// friend[-1] = "Pavit";
// log(friend);
// log(friend[-1]);


// Add
log(friend[3]);
friend[4] = 'Git';
log (friend);

// Delete
// จะเป็น empty ที่ว่างนั้นยังมีอยู่
delete friend[2];
log(friend); // 'Gold', 'Non', empty, 'Seefah', 'Git'
log(friend[2]); // undefined




// ############################## Basic Property & Method of Array ####################################

// <arr>.length
// ความยาวของ array ปัจจุบันจะเท่ากับ next array เสมอ
log(friend.length);

friend[friend.length] = 'Mix';
log(friend); // 'Gold', 'Non', empty, 'Seefah', 'Git', 'Mix'
log(friend.length); // 6


for (let i = 0 ; i < friend.length ; i++) { // (let i = 0 ; i <= friend.length - 1; i++)
    // i = 0,1,2,3,4,5 (length = 6)
    console.log(i, friend[i]);
}


// Method : Create element
const animal = ['cat', 'dog', 'elephant'];
log(animal); // 'cat', 'dog', 'elephant'

// Immutable : ไม่เปลี่ยนแปลงค่า (ถ้าดปลี่ยนต้องเขียนทับ)
// Mutable : เปลี่ยนแปลงค่าได้

// การ push ทำให้ Array Mutate ? , yes (ยาวขึ้น)
// Method return อะไรกลับมา
let r = animal.push('spider');
log(animal); //'cat', 'dog', 'elephant', 'spider'
log (r); // 4 return length ออกมา


// ถ้า index จำนวนมาก แล้วใช้ unshift จะช้ามากกกก!
let s = animal.unshift("snake", 'bird');
log(animal); // 'snake', 'bird', 'cat', 'dog', 'elephant', 'spider'
log (s);// 6


// .pop => last index (ของที่หายไป)
let t = animal.pop();
log(animal); // 'snake', 'bird', 'cat', 'dog', 'elephant'
log(t); // spider

// .shift => first index (ของที่หายไป)
let d = animal.shift();
log(animal); // 'bird', 'cat', 'dog', 'elephant'
log(d); // snake



// const = can't reassign = same address



// ############################## Loop ####################################
// เวลา loop ไม่ควร modify ค่าเดิม


// ######### for loop

// Imparative กำหนด i เอง
// for (let i = 0 ; i < animal.length ; i++) {
//     console.log(animal[i]);
// }


// ######## for...in (มอง array เป็น object ประเภทหนึ่งได้)
/* 
<key>:<value> => <index>:<value>
const arr = {
    0 : "bird"
    1 : "cat"
    2 : "dog"
}
*/
// ไม่ต้องกำหนด i เอง
// for (let index in animal) {
//     console.log(index, animal[index]);
// }


// ######## for...of ไปหมุนอันแรกนู้นนนน
for (let element of animal) {
    // 1st : element = "snake"
    // 2nd : element = "bird"
    // 3rd : element = "cat"
    // 4th : element = "dog"
    // 5th : element = "elephant"
    log(element);
}


// ######## Aside Topic : Higher Order Function
function add(x,y) {
    return x + y;
}
log(add(5,6));



// ######## Function Expression
const a = console.log;
const b = alert;
// a("hi"); // 11
// b('Hello'); // alert "Hello"


// สร้าง Function รับ parameter เป็น function
function addAndShow(x, y, showFn) {
    let result = x + y;
    // call showFn
    showFn(`result is : ${result}`);
    return result;
}


function show(result) {
    console.log(result)
}

addAndShow(5,10,show);



// Higher order function (ฟังก์ชันที่รับฟังก์ชันเป็น parameter)
// fn1, fn2, fn3 : Callback (ถูกเรียกทีหลัง) ********* จะถูกเรียกใช้ตามจำนวนของสมาชิก in array

// fn1, fn2, fn3 : จะรันก็ต่อเมื่อ FN() cooking run เท่านั้น
function cooking (fn1,fn2,fn3) {
    fn1(); // เอา parameter มา run เป็น Function
    fn2();
    fn3();

// Sub function 
}
function step1 () {
    log('Prepare ingredient')
}
function step2 () {
    log('Cooking')
}
function step3 () {
    log('Serve')
}

// call
cooking(step1,step2,step3);



// ######## forEach 
// Syntax : <array>.forEach (FN)
// Array == caller
// Higher order function == forEach (รับพารามิเตอร์เป็นฟังก์ชัน)
// สิ่งที่ใส่ให้ forEach จะต้องเป็น FN()

const item = ['football', 'bag', 'dish']
item.forEach (function () {
    console.log("Hi") // Hi Hi Hi  มีสามรอบเนื่องจากรันตามจำนวนสมาชิกใน array
})

// function iterate(a) {
//     console.log(a);
// }

// const item = ['football', 'bag', 'dish']
// const iterateFn = element => console.log(element) // const iterate = item => console.log(item)
// const iterateFn = (a,b,c) => console.log(a,b,c);
const iterateFn = (item, index, array) => console.log(index,item) // รอบแรกยังไงก็คือ item/element ถึงแม้ว่าไม่ได้กำหนดก็ตาม ******************
// 0 'football' 1 'bag' 2 'dish'


item.forEach(iterateFn);
// 1st Loop : ("football",0,item) => console.log("football")
// 2nd Loop : ("bag",1,item) => console.log("bag")
// 3rd Loop : ("dish",2,item) => console.log("dish")


// Exam1: forEach
function myForEach(fn) {
    for (let i = 0 ; i < 2 ; i++){
        fn('random');
    }
}
myForEach((a) => console.log(a)); // a จะเชื่อมโยงกับ  'random' : patern matching



// ############################## Concat #################################### 
// รับ parameter : array / items ก็ได้
// สร้าง array ใหม่ให้ (ที่ยาวกว่าเดิ๊ม)
// .concat


// ############################## Slice #################################### 
// .slice
// start index : inclusive เอา
// end index : exclude มะเอาหรอก
// ex: const arr = [0,1,2,3,4,5]
// const newArr = arr.slice(0,3) => [0,1,2]
// const newArr = arr.slice(-2) => [4,5] : นับจากด้านหลัง


// ############################## Splice #################################### 
// .splice(start,[deleteCount, elem1, ..., elemN]
// เริ่ม > ตัดออก > แทรกเข้าไป(ตำแหน่งเริ่ม)
// return สิ่งที่ถูกตัดออกไป (ยังเก็บ array ที่ถูกตัดไปไว้ให้)


// ############################## Map ####################################
// Syntax : <array>.map(callback)
// Have to write RETURN!!

[2,5,10].map((item) => item * 2);
// Create newArr = []
// 1st loop (item = 2): newArr.push(2 * 2)
// 2nd loop (item = 5): newArr.push(5 * 2)
// 3rd loop (item = 10): newArr.push(10 * 2)
// return newArr



const navGuest = [
    '<li> Home </li>',
    '<li> About Us </li>'
]

// const navUser = [<li>Profile</li>, <li>SignOut</li>]
// จดไม่ทัน


// ############################## IndexOf ####################################
// ตามหาค่านั้นใน index ต่างๆ
// index == -1 = หาไม่เจอ
// include บอกได้แค่ว่ามีหรือไม่มี



// ############################## Include ####################################
// include บอกได้แค่ว่ามีหรือไม่มี (สิ่งที่ตามหา)



// ############################## find / findIndex ####################################
// เจอ = จบการหา
// find : หาของ
// findIndex : หา index