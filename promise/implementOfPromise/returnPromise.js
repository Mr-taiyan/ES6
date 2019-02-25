import {ESPromise} from "./src/ESPromise";

new ESPromise(resolve => {

    setTimeout(() => resolve(1), 1000);

}).then(result => {

    console.log(result);

    return new ESPromise(resolve => {
        setTimeout(() => resolve(result * 2), 1000);
    });

}).then(result => {

    console.log(result);

    return new ESPromise(resolve => {
        setTimeout(() => resolve(result * 2), 1000);
    });

}).then(result => {
    console.log(result);
});