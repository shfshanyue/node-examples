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
      path: path.resolve(__dirname, 'dist/css')
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

f2().run(() => {

})
