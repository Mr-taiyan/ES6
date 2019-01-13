function Person(name) {
    let o = {};
    o.name = name;
    console.log(new.target);
    return o;
}

let chen = new Person('chen');
console.log(chen.name);