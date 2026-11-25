// Understanding the problem
// Think of it like a sprinkler in your backyard.
// - You turn on the sprinkler, and it sprays water immediately.
// - It sprays water again every 35 seconds.
// - It continues spraying every 35 seconds.
// - When you turn it off, it stops spraying completely.
// That's exactly what we're trying to accomplish with JavaScript,
//  except we're using milliseconds instead of seconds.

var cancellable = function(fn, args, t) {
    
    // run the function immediately
    fn(...args);

    // keep running the function every t milliseconds
    const timer = setInterval(function() {
        fn(...args);
    }, t);

    // create a function that stops the timer
    function cancelFn() {
        clearInterval(timer);
    }

    // return the cancellation function
    return cancelFn;
};
