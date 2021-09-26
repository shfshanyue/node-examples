const path = require('path')
const webpack = require('webpack')

function f1 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      assetModuleFilename: "images/[hash][ext]"
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|svg)$/,
          type: "asset"
        }
      ]
    }
  })
}

f1().run(() => {

})