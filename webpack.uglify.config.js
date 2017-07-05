var webpack = require("webpack");
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  entry: './lib/jsTint.js',

  output: {
    filename: 'jsTint.min.js',
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
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  //其他解决方案配置
  resolve: {

  }
}
