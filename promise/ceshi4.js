setTimeout(() => {
    console.log(0);
});

new Promise(resolve => {
    resolve(1);
    Promise.resolve().then(t => {
        console.log(2);
        Promise.resolve().then(t => {
            console.log(4);
        });
    });

    console.log(3); // 352140
}).then(t => {
    console.log(t);
});

console.log(5);