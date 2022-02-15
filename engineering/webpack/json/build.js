const webpack = require('webpack')

// 对于 JSON 而言，webpack (usedExports) 中会自动进行 Tree Shaking
// 而对于 Javascript Object 而言，不会进行 Tree Shaking

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
