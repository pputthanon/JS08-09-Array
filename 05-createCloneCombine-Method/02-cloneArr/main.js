

/////////////////////////////////////////////
function clone(arr) {
    return arr.slice()
}

const a = clone ([1,2,3,4]);
console.log(a);
a.push(5);
console.log(a);
