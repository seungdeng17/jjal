const { merge } = require('webpack-merge');
const common = require('./common.js');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',

  entry: ['@babel/polyfill', './src/index.tsx'],

  devServer: {
    host: 'localhost',
    port: 3000,
    publicPath: '/',
    open: true,
    historyApiFallback: true,
  },

  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '../.env.development'),
    }),
  ],

  devtool: 'eval-cheap-module-source-map',
});
