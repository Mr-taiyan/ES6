console.log('start');

setTimeout(function () {
    console.log('time1');
    new Promise(resolve => {
        console.log('promise2');
        resolve();
    }).then(function () {
        console.log('then2');
    });
}, 10);

new Promise(resolve => {
    console.log('promise1');
    setTimeout(() => console.log('time2'), 10);
    resolve();
}).then(function () {
    console.log('then1');
});

console.log('end');