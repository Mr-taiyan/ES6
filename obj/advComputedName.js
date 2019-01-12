var person = {},
    lastName = "last name",
    fullName = "fullName",
    ceshi = 'hehe';

person["first name"] = "chen";
person[lastName] = "taiyan";
person[fullName] = "chentaiyan";
person[ceshi] = '只是一个测试';

console.log(person["first name"]); // chen
console.log(person[lastName]); // taiyan
console.log(person.lastName); //undefined
console.log(person[fullName]); // chentaiyan
console.log(person.fullName); // chentaiyan

console.log(person[ceshi]);
console.log(person.ceshi); // undefined
console.log(person.hehe);