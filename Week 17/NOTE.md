# 学习笔记

### 1. 初始化与构建 | 初始化工具Yeoman（一）

[WRITING YOUR OWN YEOMAN GENERATOR](https://yeoman.io/authoring/)


### 运行yo命令需要全局安装：

    npm install -g yo

### 创建package.json

    npm init
    npm install --save yeoman-generator
    
#### package.json

    {
    "name": "generator-tool-chain",
    "version": "1.0.0",
    "description": "",
    "main": "generators/app/index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "youngs",
    "license": "ISC",
    "dependencies": {
        "yeoman-generator": "^4.13.0"
    }
    }


### 创建文件

    ├───package.json
    └───generators/
        ├───app/
        │   └───index.js
        └───router/
            └───index.js
#### generators/app/index.js

    var Generator = require('yeoman-generator');

    module.exports = class extends Generator {
        constructor(args, opts) {
            super(args, opts);
        }
        method1() {
            this.log('method 1 just ran');
        }
        method2() {
            this.log('method 2 just ran');
        }
    };
#### 链接和执行

    npm link
    yo tool-chain
