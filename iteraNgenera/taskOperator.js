function run(taskDef) {

    let task = taskDef();

    let result = task.next();

    function step() {

        if (!result.done) {
            result = task.next();
            step();
        }
    }

    step();
}

run(function *() {
    console.log(1);
    yield;
    console.log(2);
    yield;
    console.log(3);
});