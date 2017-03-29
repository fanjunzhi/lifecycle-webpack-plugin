# lifecycle-webpack-plugin

webpack插件，在webpack执行构建各个过程执行完成后的回调。可以在回调中显示需要的信息。
可以是时间信息，也可以是compiler的信息。

[![npm](https://img.shields.io/npm/dt/lifecycle-webpack-plugin.svg)](https://www.npmjs.com/package/lifecycle-webpack-plugin)[![GitHub forks](https://img.shields.io/github/forks/fanjunzhi/lifecycle-webpack-plugin.svg)](https://github.com/fanjunzhi/lifecycle-webpack-plugin/network)
[![GitHub stars](https://img.shields.io/github/stars/fanjunzhi/lifecycle-webpack-plugin.svg)](https://github.com/fanjunzhi/lifecycle-webpack-plugin/stargazers)

## 执行效果

![效果](https://raw.githubusercontent.com/fanjunzhi/lifecycle-webpack-plugin/master/lifecycle-webpack-plugin.png)

## 安装使用

```$xslt
npm install --save-dev lifecycle-webpack-plugin
```
在`webpack.config.js`中:

```$xslt

import { LifeCycleWebpackPlugin } from 'lifecycle-webpack-plugin';

plugins: [new LifeCycleWebpackPlugin({
    done: (compiler) => {
        console.log('\n done \n', new Date());
    },
})]
```
## 支持的事件：

待添加，先去改bug。