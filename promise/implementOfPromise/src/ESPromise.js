'use strict';

const STATE = {
    pending: 0,
    resolved: 1,
    rejected: 2
};

export class ESPromise {
    constructor(executor) {
        this._state = STATE.pending;
        this._value = undefined;
        this._callback = [];

        if (typeof executor === "function") {
            let resolve = (value) => {
                this._transition(STATE.resolved, value);
            };

            let reject = (value) => {
                this._transition(STATE.rejected, value);
            };

            executor(resolve, reject);
        }
    }

    _transition(state, value) {
        if (this._state === STATE.pending) {
            this._state = state;
            this._value = value;
            this._callback.forEach(callback => callback());
        }

    }

    then(onresolved, onrejected) {
        let self = this;

        let promise1 = new ESPromise((resolve, reject) => {
            let scheduleFn = () => {
                setTimeout(() => {
                    onresolved = typeof onresolved === "function" ? onresolved : v => v;
                    onrejected = typeof onrejected === "function" ? onrejected : v => throws(v);

                    try {
                        // if (self._state === STATE.resolved) {
                        //     resolve(onresolved(self._value));
                        // } else {
                        //     reject(onrejected(self._value));
                        // }
                        let x = self._state === STATE.resolved ? onresolved(self._value) : onrejected(self._value);
                        resolveProcedure({resolve, reject, promise2: promise1 }, x);
                    } catch (e) {
                        reject(e);
                    }
                });
            };

            if (this._state === STATE.pending) {
                this._callback.push(scheduleFn);
            } else {
                scheduleFn();
            }
        });


        return promise1;
    }

    static resolve(value) {
        return new ESPromise((resolve, reject) => resolveProcedure({resolve, reject: resolve}, value));
    }

    static reject(reason) {
        return new ESPromise((resolve, reject) => resolveProcedure({resolve: reject, reject}, reason));
    }
}

function resolveProcedure({resolve, reject, promise2}, x) {
    if (promise2 === x) {
        reject(new TypeError(x));
    }

    if (x instanceof ESPromise) {
        x.then(value => resolveProcedure({resolve, reject, promise2}, value), reason => reject(reason));
    } else if ((typeof x === 'object' && x !== null) || (typeof x === 'function')) {
        let resolvedOrRejected = false;
        try {
            let then = x.then;
            if (typeof then === 'function') {
                then.call(x, value => {
                    if (!resolvedOrRejected) {
                        resolveProcedure({resolve, reject, promise2}, value);
                        resolvedOrRejected = true;
                    }
                }, reason => {
                    if (!resolvedOrRejected) {
                        reject(reason);
                        resolvedOrRejected = true;
                    }
                });
            } else {
                resolve(x);
            }
        } catch (e) {
            if (!resolvedOrRejected) {
                reject(e);
            }
        }
    } else {
        resolve(x);
    }
}

// let p1 = new ESPromise((resolve, reject) => {
//     resolve(1);
// }).then(value => {
//     return new ESPromise((resolve, reject) => {
//         setTimeout(() => resolve(value + 1), 1000);
//     });
// }).then(value => console.log(value));

// let p1 = new ESPromise(resolve => {
//     resolve(1);
// }).then(value => {
//     console.log(1);
// }).then(value => {
//     console.log('ceshi');
// });
