const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');

// plugins
const WebpackChunkHash = require('webpack-chunk-hash');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// common config
const common = require('./webpack.common');

// constants
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(common.config, {
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        ENV: JSON.stringify(ENV)
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new UglifyJsPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist')
  }

});
