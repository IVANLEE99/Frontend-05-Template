# 学习笔记
### 单元测试工具
https://mochajs.org/
mocha 
jest

https://www.babeljs.cn/

cnpm install --save-dev @babel/core 
@babel/register

npx mocha --require @babel/register

 cnpm install @babel/preset-env --save-dev


https://www.npmjs.com/package/nyc

 cnpm install nyc --save-devc

 npx nyc npm run test

 https://www.npmjs.com/package/babel-plugin-istanbul

 https://www.npmjs.com/package/@istanbuljs/nyc-config-babel

 cnpm install --save-dev @istanbuljs/nyc-config-babel

 npm install --save-dev babel-plugin-istanbul



 ## 前端工具链使用总结

 脚手架生成工具Yeoman
[WRITING YOUR OWN YEOMAN GENERATOR](https://yeoman.io/authoring/)

前端工程化打包工具Webpack

js转化Babel

单元测试工具mocha和nyc对单元测试覆盖率进行检查

根据前端的开发需求，使用脚手架yoeman整合webpack和babel、mocha单元测试，提高前端开发效率和服用率

