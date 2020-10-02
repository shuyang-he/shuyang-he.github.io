const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const PORT = process.env.PORT || 3000;

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./public",
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
