let fs = require("fs");

function readFile(filename) {
    return function (callback) {
        fs.readFile(filename, callback);
    };
}

function run(taskDef) {

    let task = taskDef();

    let result = task.next(); // { value: [Function], done: false } the function here is a closure at line 4

    function step() {

        if (!result.done) {
            if (typeof result.value === "function") {
                result.value(function (err, data) {
                    if (err) {
                        result = task.throw(err);
                        return;
                    }

                    result = task.next(data); // { value: undefined, done: true }
                    step();
                });
            } else {
                result = task.next(result.value);
                step();
            }
        }
    }

    step();
}

run(function *() {
    let contents = yield readFile("spread.js");
    // console.log(contents.toString());
});