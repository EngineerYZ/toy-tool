var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);
    }
    collecting(){
        console.log('collecting');
    }
    creating(){
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'),
            {title:'templateing with yeoman'}
        );
        this.fs.copyTpl(
            this.templatePath('parser.js'),
            this.destinationPath('/lib/parser.js')
        );
        this.fs.copyTpl(
            this.templatePath('main.js'),
            this.destinationPath('src/main.js')
        );
        this.npmInstall([
            'webpack',
            'webpack-cli',
            'webpack-dev-server',
            'html-webpack-plugin',
            '@babel/core',
            '@babel/preset-env',
            'babel-loader',
            '@babel/plugin-transform-react-jsx',
            'mocha',
            'nyc',
            '@istanbuljs/nyc-config-babel',
            'babel-plugin-istanbul'
        ],{'save-dev':true});
        /*this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath('public/index.html'),
            {title:'templateing with yeoman'}
        )*/
    }
};