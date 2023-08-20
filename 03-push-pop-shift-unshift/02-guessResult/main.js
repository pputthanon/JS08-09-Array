let arr = ["a", "b"];

arr.push(function() {
  alert(this); // this == caller == arr
})

arr[2](); // * call FN()

// arr = ["a", "b", function() {alert(this)}];
