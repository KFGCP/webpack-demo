var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('./build/common.js');

module.exports = {
    entry: {
        ES6: './entry/ES6.js',
        entry2: './entry/entry2.js'
    },
    output: {
        path: __dirname,
        filename: './build/[name].entry.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader!jsx-loader?harmony'
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
        }]
    },
    plugins: [commonsPlugin]
};