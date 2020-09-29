const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const PORT = process.env.PORT || 3000;
const ASSET_PATH = process.env.ASSET_PATH || "./";

module.exports = {
  entry: path.resolve(__dirname, "./src/index.jsx"),
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: "babel-loader",
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "assets/img",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "index",
      template: path.resolve(__dirname, "./src/index.html"),
      inject: "head",
      scriptLoading: "defer",
      favicon: path.resolve(__dirname, "./src/favicon.ico"),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/assets/img"),
          to: path.resolve(__dirname, "./docs/assets/img"),
        },
      ],
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./docs"),
    publicPath: ASSET_PATH,
  },
};
