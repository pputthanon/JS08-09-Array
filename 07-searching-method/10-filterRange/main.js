const nums = [1,2,3,4,5,6,7,8,9,]

function filterRange (arr,lower,upper) {
    return arr.filter((n,idx) => n >= lower && n <= upper)
}

filterRange(nums, 4, 8);