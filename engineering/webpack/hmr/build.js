const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackDevServer = require('webpack-dev-server')

const compiler = webpack({
  entry: './index.js',
  mode: 'none',
  output: {
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
})

const devServer = new WebpackDevServer({
  port: 8080,
  hot: true
}, compiler)

devServer.start(err => {
  console.log('Start')
})
