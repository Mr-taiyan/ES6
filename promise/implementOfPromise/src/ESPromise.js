'use strict';

const STATE = {
    pending: 0,
    resolved: 1,
    rejected: 2
};

class ESPromise {
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
                        console.log(this === self);
                        if (self._state === STATE.resolved) {
                            resolve(onresolved(self._value));
                        } else {
                            reject(onrejected(self._value));
                        }
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
}

new ESPromise((resolve, reject) => {
    resolve(1);
}).then(value => {
    console.log(value);
});
console.log('chen');
