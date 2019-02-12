let promise = new Promise(resolve => {
    resolve(45);
});

promise.then(content => {
    console.log(content);
});

console.log('end');