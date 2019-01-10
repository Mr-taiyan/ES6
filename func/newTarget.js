function Person(name) {
    // if (new.target === Person) {
    //     this.name = name;
    // } else {
    //     throw new Error('should use new to invoke Person');
    // }
    console.log(new.target);
}

function AnotherPerson(name) {
    Person.call(this, name);
}

var person = new Person('chen');
var anotherPerson = new AnotherPerson('chen');