const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
    plugins: [
      new HtmlWebpackPlugin()
    ]
  })
}

f1().run(() => {

})