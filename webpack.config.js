'use strict';

const NODE_ENV = process.env.NODE_ENV || 'pokestars';
const webpack = require('webpack');
const fs = require('fs');
const path = require('path');

module.exports = {
    entry: {   
        app: './app/app.js'  
    },
    output: {
        path: __dirname,
        filename: "dist/[name].js",
        library: '[name]'
    },

    watch: NODE_ENV == 'pokestars',

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.css', '.html']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js', '.css', '.html']
    },

    plugins: [
        new webpack.NoErrorsPlugin()
    ],

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {              
                presets: ['es2015']
            },
        },
            { test: /\.css$/, loader: 'style-loader!css-loader?resolve url' },
            { test: /\.html$/, loader: 'html' },
            { test: /\.(woff|woff2|ttf|svg|eot|png|svg|jpg)$/, loader: 'file?name=[path][name].[ext]?[hash]' }
        ]
    },
    devServer: {
        hot:true,
        historyApiFallback:true,
        port:3000
    }
};

console.log(`Server runnig at localhost:${module.exports.devServer.port}`);