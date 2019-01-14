function* createIterator() {
    let first = yield 1;
    console.log(first);
    let second;
    try {
        second = yield first + 2;
    } catch (ex) {
        second = 6;
    }
    yield second + 3;
}

let iterator = createIterator();

console.log(iterator.next());
console.log(iterator.next(4));
console.log(iterator.throw(new Error("Boom")));