
import {NoEmitOnErrorsPlugin} from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import LiveReloadPlugin from 'webpack-livereload-plugin';

export default {

    devtool: "#source-map",
    output: {
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|public)/,
                loader: "babel-loader"
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules|public)/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.(gif|png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=10000'
            }
        ]
    },
    plugins: [
        //extract the css stream into this destination
        new ExtractTextPlugin("[name].bundle.css"),
        new LiveReloadPlugin(),
        new NoEmitOnErrorsPlugin()
    ]
}