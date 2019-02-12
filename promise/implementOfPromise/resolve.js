import {ESPromise} from "./src/ESPromise";

let promise = new ESPromise(resolve => {
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
