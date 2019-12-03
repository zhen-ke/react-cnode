/*
 * @desc 静态公共资源打包配置
 */
const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    // 定义程序中打包公共文件的入口
    vendor: [
      "react",
      "react-dom",
      "redux",
      "react-redux",
      "react-router-dom",
      "immutable",
      "redux-immutable"
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, "../dll")
    }),
    new webpack.DllPlugin({
      // 定义打包的公共vendor文件对外暴露的函数名
      name: "[name]",
      // manifest.json文件的输出位置
      path: path.resolve(__dirname, "../dll/[name].manifest.json")
    })
  ],
  output: {
    // 定义程序中打包公共文件的出口
    filename: "[name].dll.js",
    path: path.resolve(__dirname, "../dll"),
    library: "[name]"
  }
};
