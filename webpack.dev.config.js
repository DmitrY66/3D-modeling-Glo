/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'buinld.js',
    path: path.resolve(__dirname, './dist'),
  },
  mode: 'development',
  optimization: {
    minimize: false
  },
  devServer: {
    open: true,
    port: 8080,
    hot: true,
    static: {
      directory: __dirname,
      watch: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          },
        },
        exclude: /node_modules/,
      }
    ]
  }
};
