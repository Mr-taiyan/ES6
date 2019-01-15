class Collection {

    constructor() {
        this.items = new Map();
    }

    *[Symbol.iterator]() {
        yield *this.items.entries();
        yield *this.items.keys();
        yield *this.items.values();
    }
}

var collection = new Collection();
collection.items.set(1,'ceshi');
collection.items.set(2,'ceshi');
collection.items.set(3,'ceshi');

for (let x of collection) {
    console.log(x);
}
