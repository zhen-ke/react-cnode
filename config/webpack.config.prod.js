process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin"); // 引入 PWA 插件
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const makePlugins = () => {
  const plugins = [];
  const files = fs.readdirSync(path.resolve(__dirname, "../dll"));

  files.forEach(file => {
    if (/.*\.dll.js/.test(file)) {
      plugins.push(
        new AddAssetHtmlWebpackPlugin({
          filepath: path.resolve(__dirname, "../dll", file)
        })
      );
    }
    if (/.*\.manifest.json/.test(file)) {
      plugins.push(
        new webpack.DllReferencePlugin({
          manifest: path.resolve(__dirname, "../dll", file)
        })
      );
    }
  });

  return plugins;
};

module.exports = merge(baseConfig, {
  mode: "production",
  devtool: "cheap-module-source-map",
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
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
  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, "../dist")
    }),
    // 开启 DllPlugin 打包
    ...makePlugins(),
    // 开启打包结果分析
    // new BundleAnalyzerPlugin(),
    // 提取 css
    new MiniCssExtractPlugin({
      filename: "[name]-[hash:5].css",
      chunkFilename: "[name]-[hash:5].chunk.css"
    })
    // PWA配置
    // new WorkboxPlugin.GenerateSW({
    //   clientsClaim: true,
    //   skipWaiting: true
    // })
  ]
});
