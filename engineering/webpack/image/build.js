const path = require('path')
const webpack = require('webpack')

function f1 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    module: {
      rules: [
        {
          test: /\.(png|jpg|svg)$/,
          type: 'asset'
        }
      ]
    }
  })
}

function f2 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      assetModuleFilename: 'images/[name].[hash:8][ext]',
      publicPath: 'https://static.shanyue.tech'
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|svg)$/,
          type: 'asset'
        }
      ]
    }
  })
}

f2().run(() => {

})