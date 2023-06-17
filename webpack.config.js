const path = require('path'); //o nodeJs usa o CommonJS como padrão para seu sistema de módulos, diferente do ESmodules

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presents: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map'

};