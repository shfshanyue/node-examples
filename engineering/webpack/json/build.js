const webpack = require('webpack')

// 对于 JSON 而言，webpack 并不会自动进行 Tree Shaking
function f1() {
  return webpack({
    entry: './index.js',
    mode: 'none',
  })
}

// 对于 JSON 而言，webpack，需手动开启 usedExports 才会进行 Tree Shaking
function f2() {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      filename: 'use-exports.main.js'
    },
    optimization: {
      usedExports: true
    }
  })
}

function f3() {
  return webpack({
    entry: './index.js',
    mode: 'production',
    output: {
      filename: 'production.main.js'
    }
  })
}

f2().run((err, stat) => {
  // console.log(stat.toJson())
})