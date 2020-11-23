const { merge } = require('webpack-merge');
const BaseConfig = require('./webpack.base');
const paths = require('./paths');

module.exports = merge(BaseConfig, {
    devServer: {
    compress: true,
    clientLogLevel: 'none',
    contentBase: paths.appExamples,
    // contentBasePublicPath: paths.publicUrlOrPath,
    watchContentBase: true,
    hot: true,
    transportMode: 'ws',
    injectClient: false,
    // publicPath: paths.publicUrlOrPath.slice(0, -1),
    quiet: true,
    overlay: false,
    }
});