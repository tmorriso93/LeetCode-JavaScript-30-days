
var map = function(arr, fn) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i], i));
    }
     return newArr;
};

// test it out by creating this
// Function that adds 1 to each number
// const plusOne = function(n) {
//     return n + 1;
// }

// run our test in the console
// console.log(map([1,2,3], plusOne));

// Task:
// 1. Look at each number in the original array.
// 2. Run a function (fn) on that number.
// 3. Put the result into a new array.
// 4. Return the new array.

