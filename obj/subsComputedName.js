let lastName = "last name",
    fullName = "fullName";

let person = {
    "first name": "chen",
    [lastName]: "taiyan",
    [fullName]: "chentaiyan"
};

console.log(person["first name"]); // chen
console.log(person[lastName]); // taiyan
console.log(person.lastName); // undefined
console.log(person[fullName]); // chentaiyan
console.log(person.fullName); // chentaiyan