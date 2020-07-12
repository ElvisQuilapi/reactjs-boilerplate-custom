const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const basePath = __dirname
const distPath = 'dist'
const indextInput = "./public/index.html"

module.exports = {
    mode: 'development',
    entry: "./index.js",
    output: {
        path: path.join(basePath, distPath),
        filename: "build.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.(css|scss)$/,
                use:[
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }, 
    plugins: [ 
        new HtmlWebpackPlugin({
            template: indextInput
        }),
        new CleanWebpackPlugin()
    ]
};