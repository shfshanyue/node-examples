const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

function f1 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader']
        }
      ]
    },
    output: {
      clean: true,
      path: path.resolve(__dirname, 'dist/style')
    },
    plugins: [
      new HtmlWebpackPlugin()
    ]
  })
}

function f2 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: 'css-loader'
        }
      ]
    },
    output: {
      clean: true,
      path: path.resolve(__dirname, 'dist/css')
    },
    plugins: [
      new HtmlWebpackPlugin()
    ]
  })
}

function f3 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        }
      ]
    },
    output: {
      clean: true,
      path: path.resolve(__dirname, 'dist/extract')
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new MiniCssExtractPlugin()
    ]
  })
}

// chunkhash 与 contenthash 的区别:
// 一个 chunk 只有一个 hash，但是有很多个 contenthash，比如 { js: abc, css: 123} 这就对应了多个 contenthash 了
function f4 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        }
      ]
    },
    output: {
      clean: true,
      path: path.resolve(__dirname, 'dist/contenthash'),
      filename: '[name].content-[contenthash:8].chunk-[chunkhash:8].js'
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].content-[contenthash:8].chunk-[chunkhash:8].css'
      })
    ]
  })
}

f4().run(() => {

})
