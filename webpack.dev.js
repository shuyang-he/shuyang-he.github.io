const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

const PORT = process.env.PORT || 3000;
const ASSET_PATH = process.env.ASSET_PATH || "/";

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./docs",
    port: PORT,
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:8000",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});
