# lifecycle-webpack-plugin

webpack插件，在webpack执行构建各个过程执行完成后的回调。可以在回调中显示需要的信息。
可以是时间信息，也可以是compiler的信息。

[![npm](https://img.shields.io/npm/dt/lifecycle-webpack-plugin.svg)](https://www.npmjs.com/package/lifecycle-webpack-plugin)[![GitHub forks](https://img.shields.io/github/forks/fanjunzhi/lifecycle-webpack-plugin.svg)](https://github.com/fanjunzhi/lifecycle-webpack-plugin/network)
[![npm](https://img.shields.io/npm/v/lifecycle-webpack-plugin.svg)](https://www.npmjs.com/package/lifecycle-webpack-plugin)
[![GitHub issues](https://img.shields.io/github/issues/fanjunzhi/lifecycle-webpack-plugin.svg)](https://github.com/fanjunzhi/lifecycle-webpack-plugin/issues)
[![GitHub forks](https://img.shields.io/github/forks/fanjunzhi/lifecycle-webpack-plugin.svg)](https://github.com/fanjunzhi/lifecycle-webpack-plugin/network)
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
## [webpack整体流程图](https://img.alicdn.com/tps/TB1GVGFNXXXXXaTapXXXXXXXXXX-4436-4244.jpg)（引用自[http://taobaofed.org/blog/2016/09/09/webpack-flow/](http://taobaofed.org/blog/2016/09/09/webpack-flow/)）
![webpack整体流程图](https://img.alicdn.com/tps/TB1GVGFNXXXXXaTapXXXXXXXXXX-4436-4244.jpg)

## 支持的事件：

| api | 对应webpack的事件 | 描述 |
| ---- | ----------------| ---- |
| compile | compile | 开始编译 |
| make | make | 从入口点分析模块及其依赖的模块，创建这些模块对象 |
| emit | emit | 把各个chunk输出到结果文件 |
| buildModule | build-module | 构建模块 |
| afterCompile | after-compile | 完成构建 |
| seal | seal | 封装构建结果 |
| afterEmit | after-emit | 完成输出 |
| optimize | optimize | 开始压缩阶段 |
| optimizeChunkAssets | optimize-chunk-assets | 为分块压缩 |
| normalModuleLoader | normal-module-loader | 一个一个的加载模块 |
| optimizeModules | optimize-modules | 压缩模块 |
| optimizeTree | optimize-tree | 异步压缩模块树 |