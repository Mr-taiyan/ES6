console.log('start');

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ceshi');
    }, 1000);
});

console.log('middle');

promise.then(content => {
    console.log(content);

    promise.then(content => {
        console.log(content + 'com')
    });
});

setTimeout(() => {
    console.log('judge');
}, 1000);

console.log('end');