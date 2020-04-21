const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      { test: /\.js/, use: 'babel-loader'},
      { test: /\.vue/, use: 'vue-loader'},
      { test: /\.css/, use: ['vue-style-loader', 'css-loader']},
    ]
  },
  devServer: {
    hot: true,  // HotModuleReplacementPlugin -> to maintain state on refresh due file saves
    open: true  // to open browser when  applicaton is served
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
}