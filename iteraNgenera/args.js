function* createIterator() {
    let first = yield 1;
    console.log('chen');
    let second = yield first + 2;
    yield second + 3;
}

let iterator = createIterator();

console.log(iterator.next());
// console.log(iterator.next(4));
// console.log(iterator.next(5));
// console.log(iterator.next());