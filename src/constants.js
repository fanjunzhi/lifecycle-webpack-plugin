// api对应的是驼峰写法
export const avaliableMethods = [
    {
        method: 'compile',
        isAsync: false,
    }, {
        method: 'emit',
        isAsync: true,
    }, {
        method: 'afterEmit',
        isAsync: true,
    }, {
        method: 'done',
        isAsync: false,
    },
];

export const compilationMethods = [
    {
        method: 'buildModule',
        isAsync: false,
    }, {
        method: 'make',
        isAsync: false,
    }, {
        method: 'optimizeChunkAssets',
        isAsync: true,
    }, {
        method: 'normalModuleLoader',
        isAsync: false,
    }, {
        method: 'optimizeModules',
        isAsync: false,
    }, {
        method: 'optimizeTree',
        isAsync: true,
    }, {
        method: 'optimize',
        isAsync: false,
    }, {
        method: 'seal',
        isAsync: false,
    },
];
