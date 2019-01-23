let thenable = {
    then: function (resolve, reject) {
        resolve(42);
    }
};

new Promise(resolve => {
    resolve(1);

    Promise.resolve(thenable).then((t) => {
        console.log(t);
    });
    console.log(4);
}).then(t => {
    console.log(t);
});

console.log(3);