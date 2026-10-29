# LeetCode 2626 - Array Reduce Transformation

## Problem

Given an array of numbers (`nums`), a function (`fn`), and a starting value (`init`), create a function that processes each number in the array and returns one final result.

We cannot use JavaScript's built-in `.reduce()` method.

## Solution

```javascript
var reduce = function(nums, fn, init) {
    let val = init;

    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }

    return val;
};
```

## Code Explanation

**1. `let val = init;`**

- Create a variable called `val` to store our running total.
- Set it equal to `init`, which is our starting value.
- We use `let` because the value will change during each loop.

**2. `for (let i = 0; i < nums.length; i++)`**

- Loop through every number in the array.
- `i = 0` starts at the first index.
- `i < nums.length` keeps the loop running until we've processed every number.
- `i++` increases the index by 1 after each loop.

**3. `val = fn(val, nums[i]);`**

This is the most important line.

- `fn` is the function passed into `reduce` that performs a calculation.
- `val` is our current running total.
- `nums[i]` is the current number in the array.
- `fn(val, nums[i])` performs the calculation using these two values.
- The result is saved back into `val` for the next loop.

**4. `return val;`**

After the loop finishes, return the final calculated value.

## Example

```javascript
const sum = function(accum, curr) {
    return accum + curr;
};

console.log(reduce([1, 2, 3, 4], sum, 0));

// Output: 10
```

### How the loop works

Starting value: `init = 0`

| Loop | Current Number | Calculation | val |
|---|---|---|---|
| 1 | 1 | 0 + 1 | 1 |
| 2 | 2 | 1 + 2 | 3 |
| 3 | 3 | 3 + 3 | 6 |
| 4 | 4 | 6 + 4 | 10 |

Final result: `10`

## Additional Tests

```javascript
console.log(reduce([5, 10, 15], sum, 0)); // 30

console.log(reduce([2, 4, 6], sum, 10)); // 22

console.log(reduce([], sum, 25)); // 25
```

If the array is empty, the loop never executes, so the function returns the original `init` value.

## Key Takeaways

- `reduce()` processes an array and combines its values into one final result.
- `init` is the starting value.
- `fn` is a callback function that tells us what calculation to perform.
- `val` stores the result from the previous calculation.
- Each loop updates `val` using `fn(val, nums[i])`.
- We return `val` **outside the loop** so every element gets processed.
- Unlike `map()` and `filter()`, we don't need to create a new array.

**Remember:** `val = fn(val, nums[i])` takes the previous result, performs a calculation with the current array element, and saves the new result for the next loop.