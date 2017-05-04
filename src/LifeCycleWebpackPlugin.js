import { avaliableMethods, compilationMethods } from './constants';
// import { isFunction } from '../utils/isFunction';
import { dealCamelToLine } from '../utils/dealCamelToLine';

export class LifeCycleWebpackPlugin {
    constructor(opts) {
        // for (const name in opts) {
        //     if (!isFunction(opts[name])) {
        //         throw new Error(`${name} is not a function`);
        //     }
        // }

        this.opts = opts;
    }

    definePlugin = (compiler, methods) => {
        methods.forEach((method) => {
            compiler.plugin(dealCamelToLine(method.method), (...args) => {
                this.opts[method.method](compiler);

                if (method.isAsync) {
                    args[args.length - 1]();
                }
            });
        });
    };

    apply(compiler) {
        const avaliableContainMethods = [];
        const complitionContainMethods = [];

        for (const name in this.opts) {
            console.log(name, 'name', dealCamelToLine(name));

            if (avaliableMethods.filter(method => method.method.includes(name)).length) { // 如果是直接使用的事件
                avaliableContainMethods.push(name);
            } else if (compilationMethods.filter(method => method.method.includes(name)).length) { // 如果是必须在complication事件下使用的
                complitionContainMethods.push(name);
            }
        }

        this.definePlugin(compiler, avaliableMethods.filter(method => avaliableContainMethods.includes(method.method)));

        if (complitionContainMethods.length) {
            compiler.plugin('compilation', (compilation) => {
                this.definePlugin(compilation, compilationMethods.filter(method => complitionContainMethods.includes(method.method)));
            });
        }
    }
}