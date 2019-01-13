let Person = (function () {

    let privateData = new WeakMap();

    function Person(name) {
        privateData.set(this, {name: name});
    }

    Person.prototype.getName = function () {
        return privateData.get(this).name;
    };

    return Person;
}());

let person1 = new Person('chen');
let person2 = new Person('tai');
let person3 = new Person('yan');

let p1Name = person1.getName();
console.log(p1Name);

