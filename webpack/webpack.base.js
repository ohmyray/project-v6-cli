const path = require('path');
const paths = require('./paths');
console.log(paths);

const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader')
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        publicPath: "",
        // filename: 'webgis.js',
        path: paths.appExamples + './libs/webgis',
        libraryTarget: 'umd',
    },

    resolve: {
        alias: {
            // path
            '@cweb': path.resolve(__dirname, "../src/components/web"),
            '@cmobile': path.resolve(__dirname, "../src/components/mobile"),
            '@ccore': path.resolve(__dirname, "../src/components/core"),
            '@cpack': path.resolve(__dirname, "../src/components/packages"),
            '@cutil': path.resolve(__dirname, "../src/components/util"),
            '@cstyle': path.resolve(__dirname, "../src/components/style"),
            // 'vue': 'vue/dist/vue.js'
            vue$: 'vue/dist/vue.esm.js',
            $: 'jquery/dist/jquery.js'
        },
        extensions: [".tsx", ".ts", '.vue', ".js"]
    },

    module: {
        rules: [
            // vue
            {
                test: /\.vue$/,
                use: "vue-loader",
                exclude: /node_modules/
            },
            // js
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            // ts
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                },
                exclude: /node_modules/
            },
            // scss
            {
                test: /\.scss$/,
                // use: [
                //   'vue-style-loader',
                //   'css-loader',
                //   'sass-loader'
                // ]上面是原生处理scss得到样式没有打包出来直接在style标签显示
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, 'css-loader', 'sass-loader']
                //上面是经过插件出来打包出来
            },
            // css
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, 'css-loader']
            },
            //     { test:/\.scss/,use:['style-loader',  {loader: "css-loader",
            //     options: {//这个是react的css模块化
            //        modules: {
            //            localIdentName: "[path][name]-[local]-[hash:5]"
            //        }//import css from '路径' console.log(css)会生成模块
            //        //这是react的处理办法 vue就是style里面写scoped
            //        //支持id与class 控制台输出的模块是健对值形式
            //     }//css scss less一样的配置模块化
            //    }]},
            // 图片
            {
                test: /\.(jpg|PNG|png|jpeg)/,
                use: [{
                    loader: "url-loader",
                    options: {
                        outputPath: "images/",
                        limit: 10000
                    }
                }]
            },
            // 字体
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name]_[hash:7].[ext]'
                }
            }
        ],

    },

    plugins: [
        new VueLoaderPlugin(),
    ]

}