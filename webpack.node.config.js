var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports =

{
    // The configuration for the server-side rendering
    name: 'server',
    target: 'node',
    entry: './serverEntryPrototype.js',
    output: {
        path: './bin/',
        publicPath: 'bin/',
        filename: 'serverEntryPoint.js'
    },
    externals: nodeModules,
    module: {
        loaders: [
            { test: /\.js$/,

                loaders: [
                    'babel-loader'
                ]
            },
            { test:  /\.json$/, loader: 'json-loader' }
        ]
    }
};