var avaliableMethod = require('./constants');
// import { isFunction } from '../utils/isFunction';
var dealCamelToLine = require('../utils/dealCamelToLine');

class LifeCycleWebpackPlugin {
    constructor(opts) {
        // for (const name in opts) {
        //     if (!isFunction(opts[name])) {
        //         throw new Error(`${name} is not a function`);
        //     }
        // }

        this.opts = opts;
    }

    apply(compiler) {
        for (const name in this.opts) {
            if (avaliableMethod.indexOf(name)) {
                compiler.plugin(dealCamelToLine(name), stats => {
                    this.opts[name](compiler);
                });
            }
        }
    }
}

module.exports = LifeCycleWebpackPlugin;