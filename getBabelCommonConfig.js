exports.babelConfig = {
    presets: [
        ['es2015', {
            modules: false,
        }],
        'stage-0',
    ],
    plugins: [
        'transform-runtime',
    ],
    cacheDirectory: true,
    babelrc: false,
};
