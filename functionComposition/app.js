// That's function composition: taking the result of one function and passing it into the next function.

// Each item inside this array is a function
const functions = [
    x => x + 1,
    x => x * x,
    x => 2 * x
];

var compose = function(functions) {
    
    return function(x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    }
};

console.log(compose(functions)(5)); // Output: 101