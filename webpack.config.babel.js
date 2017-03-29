'use strict'

const path = require('path');
const join = require('path').join;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const getBabelCommonConfig = require('./getBabelCommonConfig');
const babelQuery = getBabelCommonConfig.babelConfig;

const webpackConfig = {
    node: {
        fs: 'empty',
        npm: 'empty',
        update: 'empty',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: false,
    entry: {
        index: './index.js',
    },
    output: {
        path: join(__dirname, 'lib'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'lifecycle-webpack-plugin',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: babelQuery,
                }],
            },
        ],
    },
    plugins: [],
};

webpackConfig.plugins.push(
    new CleanWebpackPlugin([join(__dirname, 'lib')], {
        verbose: true,
        dry: false,
        root: path.resolve('./'), // An absolute path for the root.
    })
);

webpackConfig.plugins.some(function(plugin, i) {
    if (plugin instanceof webpack.optimize.UglifyJsPlugin) {
        webpackConfig.plugins.splice(i, 1);
        return true;
    }
});

const os = require('os');

const options = {
    workers: os.cpus().length,
    compress: {
        warnings: true,
        drop_console: true,
        pure_funcs: ['console.log'],
    },
    //mangle: {
    //    except: ['$super', '$', 'exports', 'require']
    //},
    mangle: false,
    output: {
        comments: false,
        ascii_only: false,
    },
    sourceMap: false,
};

const UglifyJsParallelPlugin = require('webpack-uglify-parallel');
webpackConfig.plugins.push(
    new UglifyJsParallelPlugin(options)
);

module.exports = webpackConfig;
