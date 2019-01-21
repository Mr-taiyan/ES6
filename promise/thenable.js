let thenable = {
    then: function (resovle, reject) {
        resovle(42);
    }
};

let p1 = Promise.resolve(thenable);

p1.then(function (value) {
    console.log(value);
});