
// Imagine you have a button that you're only allowed to press one time.
// - First press: The button works.
// - Second press: Nothing happens.
// - Third press: Still nothing happens.
// That's exactly what LeetCode wants you to build

var once = function(fn) {
    let called = false;
    
    return function(...args){
        if (called === false) {
            called = true;
            return fn(...args);
        }

        return undefined;
    }
};


const add = (a, b, c) => a + b + c;

const onceFn = once(add);

console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));
console.log(onceFn(4, 5, 6));


// let called = false — Creates a variable to track whether the function has been used.

// if (called === false) — Only allows the original function to run if it hasn't been used.

// called = true — Prevents every future call from executing the original function.