let promise = Promise.resolve(42);

promise.then(function (value) {
    console.log(value);
});

console.log('chen');