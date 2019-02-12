import {ESPromise} from "./src/ESPromise";

console.log('start');

let promise = new ESPromise((resolve, reject) => {
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

    console.log('splite');
});

setTimeout(() => {
    console.log('judge');
}, 1000);

console.log('end');
