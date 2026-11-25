// Think of it like setting an alarm on your phone. You set an alarm for 8 AM, 
// but if you cancel it at 7 AM, it will never go off. If you try to cancel it 
// at 9 AM, it's already gone off.

var cancellable = function(fn, args, t) {
    const timer = setTimeout(() => {
        fn(...args);
    }, t);

    return function cancelFn() {
        clearTimeout(timer);
    };
};