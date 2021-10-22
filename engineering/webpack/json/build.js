const webpack = require('webpack')

function f1 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    optimization: {
      usedExports: true
    }
  })
}

f1().run((err, stat) => {
  // console.log(stat.toJson())
})
