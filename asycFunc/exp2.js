console.log('start');

setTimeout(() => {
    console.log('timeout1');
}, 2000);

setInterval(() => {
    while (true) {
        ;
    }
}, 1000);

setInterval(() => {
    console.log('interval');
},200);

console.log('end');