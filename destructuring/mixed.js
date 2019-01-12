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
    },
    range: [0, 3]
};

let {loc, loc: { start }, range: [ ,a]} = node;

console.log(loc);
console.log(start);
console.log(a);