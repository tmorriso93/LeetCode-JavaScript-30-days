var argumentsLength = function(...args) {
    return args.length;
};

console.log(argumentsLength(1, 3, 8));
console.log(argumentsLength(50, 99));
console.log(argumentsLength({}, null, "7"));