const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        // Webpack naturally watches JS files.
        // We add 'watchFiles' to manually track files that aren't imported in JS.
        watchFiles: ["./src/template.html"], // Forces a browser reaload if i edit the HTML file
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
    ],
};