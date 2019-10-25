const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './js/main.bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        port: 3000,
        open: true,
        contentBase: path.resolve(__dirname, 'build'),
        overlay: true,
        compress: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        // options: {
                        //     data: '@import "variables";',
                        //     includePaths: [
                        //         path.resolve(__dirname, 'src')
                        //     ]
                        // }
                    }
                ]
            },
            {
                test: /\.(jpe?g|gif|png|svg|webp)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash].[ext]',
                    outputPath: 'images'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new MiniCssExtractPlugin({ filename: './css/style.bundle.css' }),
        // new OptimizeCssAssetsWebpackPlugin()
    ]
};
