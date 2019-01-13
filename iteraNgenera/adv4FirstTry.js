let collection = {
    items: [],
    [Symbol.iterator]: function *() {
        for (let item of this.items) {
            yield item;
        }
    }
};

collection.items = [1, 2, 3, 4];

for (let x of collection) {
    console.log(x);
}