'use strict';

class Person {

    constructor(name) {

        this.name = name;
        this.age = 18;
    }

    then(name) {
        let p1 = new Person(name);
        return p1;
    }
}

let a = new Person('chen').then('a').then('b');
console.log(a.name);