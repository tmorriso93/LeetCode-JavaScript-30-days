
function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            console.log("getting answer from cache")
            return cache.get(key);
        }

        console.log('Calculating new answer')

        const result = fn(...args);

        cache.set(key, result);

        return result;
    }
}

// test the memoize function with a simple sum function
const sum = (a, b) => a + b;

const memoizedSum = memoize(sum);

console.log(memoizedSum(2, 3));
console.log(memoizedSum(2, 3));
console.log(memoizedSum(5, 5));
console.log(memoizedSum(2, 3));