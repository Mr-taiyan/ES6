let judge;
judge = false;
// judge = true;

let func1 = name => {
    console.log(name);
    return name;
};

let func2 = name => {
    name = name + '123';
    console.log(name);
    return name;
};

arg = 'chen';
let ceshi = judge ? func1(arg) : func2(arg);