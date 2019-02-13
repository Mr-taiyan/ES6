import {ESPromise} from "./src/ESPromise";

let thenable = {
    then: function (resolve, reject) {
        reject(42);
    }
};

let p1 = ESPromise.reject(thenable);

p1.then(null, value => {
    console.log(value);
});