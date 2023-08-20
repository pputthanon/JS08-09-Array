let flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
  ];

let result = flattened.reduce ((acc,subArr) => {
    // walkthrough SubArray
    // each element of subarray => push into acc
    for (let num of subArr) {
        acc.push(num);
    }
    return acc;
}, []);

console.log(result);