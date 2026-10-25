var filter = function(arr, fn) {
    let filteredArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};

//filteredArr = somewhere to store the numbers we want to keep.

//loop = visits every number in the array, one at a time.

//if () statement = Check if the number passes our test