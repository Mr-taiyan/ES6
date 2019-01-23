new Promise(resolve => {
    setTimeout(() => {
        console.log(1);
    });
    setImmediate(() => {
        console.log(2);
    });
    resolve(1);
}).then(() => {
    setTimeout(() => {
        console.log(3);
    });
    setImmediate(() => {
        console.log(4);
    });
}).then(() => {
    setTimeout(() => {
        console.log(5);
    });
    setImmediate(() => {
        console.log(6);
    });
});