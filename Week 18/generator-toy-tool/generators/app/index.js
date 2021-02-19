var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);

        // Next, add your custom code
        // this.option('babel'); // This method adds support for a `--babel` flag
    }
    async initPackage() {
        const answer = await this.prompt([
            {
                type: "input",
                name: "name",
                message: "Your project name",
                default: this.appname // Default to current folder name
            }
        ]);

        const pkgJson = {
            "name": answer.name,
            "version": "1.0.0",
            "description": "",
            "main": "generators/app/index.js",
            "scripts": {
                "build":"webpack",
                "test": "mocha --require @babel/register",
                "coverage": "nyc mocha"
            },
            "author": "youngs",
            "license": "ISC",
            "devDependencies": {
                "yeoman-generator": "^4.13.0",
                "@babel/core": "^7.12.13",
                "@babel/preset-env": "^7.12.13",
                "@babel/register": "^7.12.13",
                "@istanbuljs/nyc-config-babel": "^3.0.0",
                "babel-plugin-istanbul": "^6.0.0",
                "mocha": "^8.2.1",
                "nyc": "^15.1.0",
                "babel-loader": "^8.2.2",
                "copy-webpack-plugin": "^7.0.0",
                "css-loader": "^5.0.2",
                "vue-loader": "^15.9.6",
                "vue-style-loader": "^4.1.2",
                "vue-template-compiler": "^2.6.12",
                "webpack": "^5.23.0",
                "webpack-cli": "^4.5.0"
            },
            "dependencies": {
                "vue": "^2.6.12"
            }
        }
        this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
        // this.npmInstall(['vue'], { 'save-dev': false });
        // this.npmInstall(['webpack@4.41.2','webpack-cli@4.4.0', 'vue-loader', 'vue-template-compiler', 'vue-style-loader', 'css-loader','copy-webpack-plugin@6.4.1'], { 'save-dev': true });
        // this.npmInstall(['webpack','webpack-cli', 'vue-loader', 'babel-loader','vue-template-compiler', 'vue-style-loader', 'css-loader','copy-webpack-plugin'], { 'save-dev': true });
        // this.npmInstall();
        // cnpm install --save-dev webpack webpack-cli  vue-loader  babel-loader vue-template-compiler  vue-style-loader  css-loader copy-webpack-plugin
        // Extend or create package.json file in destination path
        // this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
        // this.log("app name", answers.name);
        // this.log("cool feature", answers.cool);
        this.fs.copyTpl(
            this.templatePath('.babelrc'),
            this.destinationPath('.babelrc'),
            {}
        );
        this.fs.copyTpl(
            this.templatePath('.nycrc'),
            this.destinationPath('.nycrc'),
            {}
        );
        this.fs.copyTpl(
            this.templatePath('test/'),
            this.destinationPath('test/'),
            {}
        );
        this.fs.copyTpl(
            this.templatePath('HelloWorld.vue'),
            this.destinationPath('src/HelloWorld.vue'),
            {}
        );
        this.fs.copyTpl(
            this.templatePath('webpack.config.js'),
            this.destinationPath('webpack.config.js'),
            {}
        );
        this.fs.copyTpl(
            this.templatePath('main.js'),
            this.destinationPath('src/main.js'),
            {}
        );
        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath('src/index.html'),
            { title: answer.title } // user answer `title` used
          );
    }
    install() {
        this.npmInstall();
    }
};