let yourMsg = {};
yourMsg.peopleList = {};
yourMsg.listener = function (key, fn) {
    if (!this.peopleList[key]) {
        yourMsg.peopleList[key] = [];
    }

    this.peopleList[key].push(fn);
};

yourMsg.trigger = function () {
    let key = Array.prototype.shift.call(arguments);
    let fns =this.peopleList[key];
    if (!fns || fns.length === 0) {
        return false;
    }

    for (let i = 0, fn; fn = fns[i++];) {
        fn.apply(this, arguments);
    }
};

yourMsg.listener('marrage', name => {
    console.log(`${name} want to know you are getting married`);
});

yourMsg.listener('sack', name => {
    console.log(`${name} want to know you are getting laid off`);
});

yourMsg.trigger('marrage', 'chen');
yourMsg.trigger('sack', 'taiyan');