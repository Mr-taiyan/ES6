function red() {
    console.log('red');
}

function green() {
    console.log('green');
}

function yellow() {
    console.log('yellow');
}

function light(timmer, cb) {
    return new Promise(resolve => {
        setTimeout(() => {
            cb();
            resolve();
        }, timmer);
    });
}

function step() {
    Promise.resolve().then(() => {
        return light(3000, red);
    }).then(() => {
        return light(2000, green);
    }).then(() => {
        return light(1000, yellow);
    }).then(() => {
        step();
    });
}

step();