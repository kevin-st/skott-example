const path = require("path");

module.exports = {
  entry: "./packages/index.ts",
  resolve: {
    alias: {
      "@ar": path.resolve(__dirname, "packages/ar"),
      "@configurator": path.resolve(__dirname, "packages/configurator"),
      "@xmlParser": path.resolve(__dirname, "packages/xml-parser"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
      },
    ],
  },
};
