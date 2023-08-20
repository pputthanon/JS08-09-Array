let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// expected result: ['a', 'b', 'c', 'e', 'd']


const result = alphabets.reduce ((acc,char) => {
    // acc.push(char);
    // ถ้า character ตัวนั้นอยู่ใน acc แล้วไม่ต้อง push
    // ถ้าไม่มี character นั้นอยู่ใน acc => push

    // char == 'f'
    // acc == ['a', 'b']
    let found = false;
    for (let c of acc) {
        if (c == char) found = true;
    }

    // action
    if (!found) acc.push(char);

    // return
    return acc;
}, []);

console.log(result)

////////////////////////////////////////////////
// #2
const set = new Set(alphabets);
console.log(set);

////////////////////////////////////////////////
// #3
const newArr = new Array(...set);
console.log(newArr);
