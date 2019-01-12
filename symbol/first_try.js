let firstName = Symbol('first name');

let person = {
    firstName: "chen"
};

console.log(person.firstName); // chen
console.log(person[firstName]); // undefined


let friend = {
    [firstName]: "taiyan"
};

console.log(friend.firstName); // undifined
console.log(friend[firstName]); // taiyan