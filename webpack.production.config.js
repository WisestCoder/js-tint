var webpack = require("webpack");

module.exports = {
  entry: './dist/jsTint.js',

  output: {
    filename: 'jsTint.production.js',
    path: __dirname + '/dist'
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
