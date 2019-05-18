const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const vueLoader = require('vue-loader/lib/plugin')
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    "presets": ['@babel/preset-env']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new vueLoader()
    ],
    devServer: {
        open: true,
        port: 9090,
        hot: true,
        host: 'localhost'
    },
    reslove: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' //起别名
        },
        extensions: ['.js', '.json', '.vue'] //自动解析确定的扩展
    }
}