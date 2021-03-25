const paths = require("./paths")
const common = require("./webpack.common.js")
const { merge } = require("webpack-merge")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

module.exports = merge(common, {
    mode: "development",

    devtool: "inline-source-map",

    devServer: {
        historyApiFallback: true,
        contentBase: paths.build,
        open: false,
        compress: true,
        hot: true,
        port: 5000,
    },

    plugins: [
        new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
})
