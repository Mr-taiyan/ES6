let promise = new Promise(resolve => {
    setTimeout(() => {
        console.log('start');
        resolve(45);
        console.log('middle');
    });
});

promise.then(constent => {
    console.log(constent);
});

console.log('end');