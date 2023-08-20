const names = ['Mike', 'Sid', 'Jack', 'Bill'];


//////////////////////////////////////////////
// Callback : Literal/ On the fly
names.forEach((person,order) => console.log(order +1,person));

//////////////////////////////////////////////
function logPerson(person,order) {
    console.log (order + 1, person);
}

// Callback : Named, Refernce
names.forEach(logPerson);