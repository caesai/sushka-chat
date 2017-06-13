var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, 'assets');
// var fs = require('fs');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractSCSS = new ExtractTextPlugin('[name].css');
var config = new Map();

config.set('vendor_dependencies', [
  'history',
  'react',
  'react-redux',
  'react-router',
  'redux',
  'redux-router'
]);

module.exports =
{
    name: 'browser',
    devtool: 'eval',
    context: path.join(__dirname, './'),
    entry: './index.js',
    output: {
        path: buildPath,
        filename: 'bundle.js',
        // Everything related to Webpack should go through a build path,
        // localhost:3000/build. That makes proxying easier to handle
        publicPath: 'http://localhost:8081/assets/'
    },

    resolve: {
        extensions: [
            '.js',
            '.json',
            '.html',
            '.css', '.scss'
        ]
    },

    module: {

        loaders: [
            // Compile es6 to js.
            {
                test: /.*\.js?$/,
                loaders: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            },

            {
                test: /\.scss$/,
                loaders: extractSCSS.extract(['css-loader?sourceMap&minimize&modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]','resolve-url-loader','sass-loader?sourceMap'])
            },
            // {
            //     test: /\.css$/,
            //     loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
            // },

            // // Fonts
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
        ]
    },
    // devServer: {
    //   hot: true
    // },
    plugins: [
      extractSCSS,
      // new webpack.ProvidePlugin({
      // }),
      new webpack.HotModuleReplacementPlugin()
      // new webpack.NoErrorsPlugin()
    ]

};
