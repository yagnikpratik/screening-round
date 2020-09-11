const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

module.exports = {
    entry: { 
        index: path.resolve(__dirname, "src", "index.jsx") 
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: '[name].js',
        chunkFilename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ 
                    MiniCssExtractPlugin.loader,
                    "css-loader", 
                    "sass-loader"
                ]
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "src", "index.html"),
        }),
        new webpack.DefinePlugin({
            'ENV' : JSON.stringify(env)
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ],
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({
                cssProcessorOptions: {
                    discardComments: { 
                        removeAll: true 
                    } 
                },
            })
        ],
    },
    mode: env
};