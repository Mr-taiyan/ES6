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
}

