let promise = Promise.reject('ceshi');

promise.catch(function (value) {
    console.log(value);
});

console.log('chen');

promise.then(null, function (value) {
    console.log(value);
});