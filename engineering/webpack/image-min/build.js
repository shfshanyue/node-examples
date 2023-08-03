const path = require('path')
const webpack = require('webpack')

function f1 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    module: {
      rules: [
        {
          test: /\.(png|jpg|svg|webp)$/,
          type: 'asset/inline'
        }
      ]
    }
  })
}

f1().run(() => {

})