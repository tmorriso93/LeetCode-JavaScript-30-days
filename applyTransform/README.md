// Task:
// 1. Look at each number in the original array.
// 2. Run a function (fn) on that number.
// 3. Put the result into a new array.
// 4. Return the new array.

Transform each number
This is the most important line: newArr.push(fn(arr[i], i));

Let's break it into three pieces.
- arr[i] gets the number at the current index.
- fn(arr[i], i) calls the function we were given, passing the number and its index.
- newArr.push(...) adds the function's result to our new array.

Important: fn is a function passed into map. We don't need to create it ourselves. LeetCode supplies it when calling our code.

Step 4: Return the new array
    :return newArr;

Once the loop finishes, we return our completed basket of numbers.