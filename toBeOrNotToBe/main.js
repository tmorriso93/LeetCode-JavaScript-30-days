var expect = function(val) {
    return {
        toBe: function(otherVal) {
            if (val === otherVal) {
                return true;
            }
            throw new Error("Not Equal")
        },

        notToBe: function(otherVal) {
            if (val !== otherVal) {
                return true;
            }
            throw new Error("Equal")
        }
    }
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws Error("Equal")