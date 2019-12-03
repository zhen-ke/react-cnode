const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const configs = {
  entry: {
    app: path.resolve(__dirname, "../src/index.js")
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.join(__dirname, "src")
    }
  },
  optimization: {
    usedExports: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "../src"),
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]-[hash:5].min.[ext]",
            publicPath: "static/images/",
            outputPath: "static/images/",
            limit: 10 * 1024 // size <= 10KB 转成 Base64
          }
        }
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]-[hash:5].min.[ext]",
            publicPath: "static/fonts/",
            outputPath: "static/fonts/",
            limit: 1 * 1024 // size <= 5KB
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    })
  ],
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name]-[hash:5].js",
    chunkFilename: "[name].[hash:5].js"
  }
};

module.exports = configs;
