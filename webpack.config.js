const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Output Management',
            minify: {
                minifyJS: {
                    comments: false,
                    compress: {
                        unused: true,
                        drop_debugger: true,
                        drop_console: true,
                        dead_code: true
                    },
                    ie8: false,
                    safari10: true,
                    warnings: false,
                    toplevel: true
                }
            }
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
