console.log('start');

setTimeout(function () {
    console.log('time1');
}, 0);

new Promise(resolve => {
    console.log('promise');
    resolve();
    setTimeout(() => {console.log('time2')}, 0);
}).then(() => {
    console.log('then')
});

console.log('end');