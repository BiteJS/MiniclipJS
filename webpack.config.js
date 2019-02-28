const path = require('path');

module.exports = {
    entry: './src/assets/js/main.js',
    mode : 'development' ,
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build/assets/js')
    },
    module: {
        rules: [
        {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        },{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    watch: true
};