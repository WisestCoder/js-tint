var webpack = require("webpack");

module.exports = {
  devtool: 'source-map',
  entry: './lib/jsTint.js',

  output: {
    filename: 'jsTint.js',
    path: __dirname + '/dist',
    devtool: 'source-map'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015'
      },
    ]
  },

  repository: "https://github.com/dushao103500/jsTint.git",

  // 插件项
  plugins: [

  ],
  //其他解决方案配置
  resolve: {

  }
}
