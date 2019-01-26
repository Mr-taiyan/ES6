let yourMsg = {};
yourMsg.peopleList = [];
yourMsg.listener = function (fn) {
    yourMsg.peopleList.push(fn);
};

yourMsg.trigger = function () {
    for(let i = 0, fn; fn = this.peopleList[i++];) {
        // fn(arguments);
        fn.apply(this, arguments);
    }
};

yourMsg.listener(name => {
    console.log('ceshi');
});

yourMsg.trigger('chen');
yourMsg.trigger('tai');
yourMsg.trigger('yan');
