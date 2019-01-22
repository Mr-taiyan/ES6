new Promise(resolve => { // 4321
    resolve(1);
    Promise.resolve().then(() => console.log(2));
    console.log(4);
}).then(t => console.log(t));
console.log(3);