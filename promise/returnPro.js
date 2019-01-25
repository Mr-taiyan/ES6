let p1 = new Promise((resolve, reject) => {
    resolve(1);
}).then(value => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value + 1), 1000);
    });
}).then(value => console.log(value));