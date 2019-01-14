function* createIterator() {
    let first = yield 1;
    console.log(first);
    let second = yield first + 2;
    let ceshi = yield second + 3;
    console.log(ceshi);
}

let iterator = createIterator();

console.log(iterator.next());
console.log(iterator.next(4));
console.log(iterator.next(5));
console.log(iterator.next(1));
