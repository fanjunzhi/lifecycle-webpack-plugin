# lifecycle-webpack-plugin

webpack插件，在webpack执行构建各个过程执行完成后的回调。可以在回调中显示需要的信息。
可以是时间信息，也可以是compiler的信息。

[![Github Releases](https://img.shields.io/github/downloads/lifecycle-webpack-plugin/lifecycle-webpack-plugin/latest/total.svg)](https://www.npmjs.com/package/lifecycle-webpack-plugin)
[![npm](https://img.shields.io/npm/v/lifecycle-webpack-plugin.svg)](https://www.npmjs.com/package/lifecycle-webpack-plugin)

## 执行效果

![效果](https://raw.githubusercontent.com/fanjunzhi/lifecycle-webpack-plugin/master/lifecycle-webpack-plugin.png)

## 安装使用

```$xslt
npm install --save-dev lifecycle-webpack-plugin
```
在`webpack.config.js`中:

```$xslt
var LifeCycleWebpackPlugin = require('lifecycle-webpack-plugin').LifeCycleWebpackPlugin;

plugins: [new LifeCycleWebpackPlugin({
    done: (compiler) => {
        console.log('\n done \n', new Date());
    },
})]
```
## 支持的事件：

待添加，先去改bug。