var person = {},
    lastName = "last name",
    fullName = "fullName";

person["first name"] = "chen";
person[lastName] = "taiyan";
person[fullName] = "chentaiyan";

console.log(person["first name"]); // chen
console.log(person[lastName]); // taiyan
console.log(person.lastName); //undefined
console.log(person[fullName]); // chentaiyan
console.log(person.fullName); // chentaiyan