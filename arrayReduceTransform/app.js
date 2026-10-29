


var reduce = function(nums, fn, init) {

    //init is the number w estart with
    let val = init;

    //for loop to loop through the array
    for (let i = 0; i < nums.length; i++) {
    
    //fn is a function that performs a calculation
        val = fn(val, nums[i]);
    }

    return val;
};

const sum = (total, num) => total + num;

console.log(reduce([1,2,3,4], sum, 0));
