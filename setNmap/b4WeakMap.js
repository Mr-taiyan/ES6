var Person = (function () {
    var privateData = {},
        privateId = 0;

    function Person(name) {
        Object.defineProperty(this, "_id", {
            value: privateId++
        });

        privateData[this._id] = {
            name: name
        };
    }

    Person.prototype.getName = function () {
        return privateData[this._id].name;
    };

    Person.getAll = function () {
        return privateData;
    };

    return Person;
}());

let person1 = new Person("chen");
let person2 = new Person('tai');
let person3 = new Person("yan");
console.log(Person.getAll());
