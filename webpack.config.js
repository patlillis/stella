var path = require('path');
var webpack = require('webpack');

var babelSettings = JSON.stringify({
    presets: ['es2015', 'react']
});

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './main.js' // Your appʼs entry point
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json' },
            {
                test: /.jsx?$/,
                loaders: [
                    'react-hot',
                    'babel-loader?' + babelSettings
                ],
                exclude: /node_modules/,
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
};