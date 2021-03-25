const paths = require("./paths")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = {
    entry: [paths.src + "/index.tsx"],

    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            "@src": paths.src
        }
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: "/node_modules/",
            },

            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },

    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin()],
    },

    output: {
        path: paths.build,
        filename: "[name].bundle.js",
        publicPath: "/",
    },

    plugins: [
        new CleanWebpackPlugin(),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: paths.src + "/assets",
                    to: "assets",
                    globOptions: {
                        ignore: ["*.DS_Store"],
                    },
                },
            ],
        }),

        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css",
        }),

        new HtmlWebpackPlugin({
            title: "Biathlon",
            favicon: paths.src + "/assets/icons/favicon.png",
            template: paths.public + "/index.html",
            filename: "index.html",
        }),
    ],
}
