async function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(resolve, millis);
    });
}

console.log("Starting the sleep function...");
sleep(2000).then(() => {
    console.log("Finished sleeping for 2 seconds.");
});


// Think of a Promise like ordering a pizza.

// When you order a pizza, it doesn't arrive immediately. You have to wait for it.

// A Promise works the same way:
// - Pending: Your pizza is being prepared.
// - Resolved: Your pizza has arrived!
// - Rejected: Something went wrong with your order.
// In our code, resolve is a function we call when we're finished waiting.