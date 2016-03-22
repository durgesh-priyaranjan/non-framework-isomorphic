var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'cheap-module-eval-source-map',

    entry: ['webpack-hot-middleware/client',
        './client/index.js'
    ],

    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/dist/'
    },

    resolve: {
        extensions: ['', '.js']
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: 'style!css?modules'
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
