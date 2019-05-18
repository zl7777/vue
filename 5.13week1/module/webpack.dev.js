const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin"); //做清空,每次更新后最新的
const HtmlWebpackPlugin = require('html-webpack-plugin'); //自动复制一份html文件到build文件夹下
const webpack = require('webpack');
const list = require('./src/data/list.json')
module.exports = {
    entry: path.join(__dirname, './src/index.js'), //读取路径   单个入口文件,
    // entry: {
    //     index: path.join(__dirname, './src/index.js'),多个入口文件{}传入
    //     app: path.join(__dirname, './src/app.js')
    // }

    output: { //出口文件
        path: path.join(__dirname, 'build'), //自定义路径
        // filename: '[hash]-[name].js' //固定写法   [hash]事实更新js文件
        filename: '[hash]-[name].js' //固定写法   [name].js
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/, //需要匹配的文件.js/jsx结尾
                loader: 'babel-loader',
                options: {
                    "presets": ['@babel/preset-env']
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }, {
                test: /\.(img|jpg|gif)$/, //需要配置的匹配图片的格式
                loader: 'url-loader',
                options: { //设置当前的loader的配置值
                    limit: 4000
                }
            },
            {
                test: /\.(eot|svg|ttf|woff)$/, //icon图标
                loader: 'file-loader', //小文件类型   icon图标
                options: {
                    name: './iconfont/[name].[ext]'
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
                    // use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new CleanWebpackPlugin(), //打包之前清除build里面的文件
        new HtmlWebpackPlugin({
            template: 'index.html', //要编译的模板
            title: '1701B',
            filename: 'app.html', //重命名的文件名
            inject: true, //是否注入js/css,默认是true
            minify: {
                removeAttributeQuotes: true, //去除引导
                collapseWhitespace: true, //去除空格
                removeComments: true, //去除注释
                removeEmptyAttributes: true //去除空属性
            }
        }),
        new webpack.HotModuleReplacementPlugin() //模块热更新

    ],
    devServer: { //dev开发环境
        open: true,
        port: 8084,
        host: 'localhost',
        hot: true,
        // inline: true, //等同于livereload自动刷新
        before(app) { //相当于middlewere  做拦截请求
            app.get('/api/list', function(req, res, next) {
                res.json({ code: 1, data: list });
            });
        }

    }
}