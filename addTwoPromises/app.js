var addTwoPromises = async function(promise1, promise2) {
    const num1 = await promise1;
    const num2 = await promise2;

    return num1 + num2;
};

const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);

addTwoPromises(promise1, promise2).then(result => {
    console.log(result);
});