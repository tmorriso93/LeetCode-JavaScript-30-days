
var createCounter = function(init) {

    let count = init;

    return {

        increment: function() {
            count++;
            return count;
        },

        decrement: function() {
            count--;
            return count;
        },

        reset: function() {
            count = init;
            return count;
        },


    }

}

console.log(createCounter(10).increment()); 
console.log(createCounter(5).decrement()); 
console.log(createCounter(10).reset()); 