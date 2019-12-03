const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "cheap-module-eval-soure-map",
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    port: 8080,
    historyApiFallback: true,
    hot: true
    // hotOnly: true
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          {
            loader: "style-loader"
          },
          { loader: "css-loader" },
          {
            loader: "postcss-loader", // 添加私有属性
            options: {
              plugins: [require("autoprefixer")({})]
            }
          }
        ]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
