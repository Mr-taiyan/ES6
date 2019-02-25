import {ESPromise} from "./src/ESPromise";

let promise = new ESPromise(resolve => {
    setTimeout(() => {
        resolve('test1');
    },2000);
});

promise.then(result => {
    console.log(result);
    setTimeout(() => {
        console.log('ceshi');
    },2000);
    return result;
}).then(result => {
    console.log(result);
});