const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// `webpack-cli` 与 `webpack/cli` 调来调去，逻辑复杂，为了方便，直接使用其 node api 进行示例，方便调试

// 1. html-webpack-plugin 是如何把 js 注入到 html 中的
// 

function f1 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      iife: false,
      pathinfo: 'verbose',
      filename: '[name].[contenthash:8].js',
      clean: true,
      publicPath: 'https://shanyue.tech'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html' 
      })
    ],
    optimization: {
      runtimeChunk: true
    }
  })
}

f1().run((err, stat) => {
  // console.log(stat.toJson())
})
