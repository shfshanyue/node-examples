const webpack = require('webpack')

function f1 () {
  return webpack({
    entry: './index.js',
    mode: 'production',
  })
}

function f2 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    devtool: false,
    optimization: {
      usedExports: true,
      sideEffects: false
    }
  })
}

f2().run((err, stat) => {
  // console.log(stat.toJson())
})
