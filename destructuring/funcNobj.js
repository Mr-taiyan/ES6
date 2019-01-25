function ceshi({ceshi1, ceshi2, test}, x) {
    ceshi1('chen');
    console.log(ceshi2(x));
}

let a = (name) => {
    console.log(name);
};

let ceshi2 = fn => fn();

ceshi({ceshi1: a, ceshi2}, () => {
    console.log('taiyan');
    return 1;
});