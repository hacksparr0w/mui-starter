const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "src"),
        use: ["babel-loader"]
    }, {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html")
    })
  ],
  devServer: {
    host: '0.0.0.0',
    static: {
      directory: path.join(__dirname, "build")
    },
    port: 3000
  },
  watchOptions: {
    aggregateTimeout: 1000,
    poll: 500,
    ignored: /node_modules/
  }
};
