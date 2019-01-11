let node = {
    type: "identifier",
    name: "foo",
    loc: {
        start: {
            line: 1,
            column: 1
        },
        end: {
            line: 1,
            column: 4
        }
    }
};


let {loc: { start }} = node;

console.log(start);
console.log(start.line);
console.log(start.column);
// console.log(loc); // throw a error!!!