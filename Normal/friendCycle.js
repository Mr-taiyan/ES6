let event = {
    peopleList: {},
    listen: function (key, fn) {
        if (!this.peopleList[key]) {
            this.peopleList[key] = [];
        }
        this.peopleList[key].push(fn);
    },
    trigger: function () {
        let key = Array.prototype.shift.call(arguments);
        let fns = this.peopleList[key];
        if (!fns || fns.length === 0) {
            return false;
        }
        for (let i = 0, fn; fn = fns[i++];) {
            fn.apply(this,arguments);
        }
    },
    remove: function (key, fn) {
        let fns = this.peopleList[key];
        if (!fns) {
            return false;
        }
        if (!fn) {
            fns && (fns.listen = 0);
        } else {
            for (let index = 0; index < fns.length; index++) {
                const _fn = fns[index];
                if (_fn === fn) {
                    fns.splice(index, 1);
                }
            }
        }
    }
};

let installEvent = function (obj) {
    for (let i in event) {
        obj[i] = event[i];
    }
};

let yourMsg = {};
installEvent(yourMsg);
yourMsg.listen('marrage', function (name) {
    console.log(`${name} want to know you are getting married`);
});
yourMsg.listen('sack', function (name) {
    console.log(`${name} want to know you are getting laid of`);
});

yourMsg.trigger('marrage', 'chen');
yourMsg.trigger('sack', 'taiyan');
