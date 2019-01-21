const thenable = {
    then: function (a, b) {
        b('ceshi');
    }
};

const p1 = Promise.resolve(thenable);

p1.catch(function (value) {
    console.log(value);
});