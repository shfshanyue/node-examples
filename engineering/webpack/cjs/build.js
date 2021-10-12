const webpack = require('webpack')
const path = require('path')

// `webpack-cli` 与 `webpack/cli` 调来调去，逻辑复杂，为了方便，直接使用其 node api 进行示例，方便调试

// 1. webpack 的运行时代码是如何加载模块的
// 1. [content-hash].js 中的 hash 是如何生成的
// 

function f1 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      iife: false,
      pathinfo: 'verbose'
    }
  })
}

function f2 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      chunkLoading: 'import'
    }
  })
}

function f3 () {
  return webpack({
    entry: './index.js',
    mode: 'production',
    output: {
      filename: 'main.production.js'
    }
  })
}

function f4 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      filename: 'main.[contenthash].js'
    }
  })
}

function f5 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      filename: '[name].[contenthash:8].js',
      chunkFilename: '[name].[contenthash:8].chunk.js',
      path: path.resolve(__dirname, 'dist/runtime'),
      clean: true
    },
    optimization: {
      runtimeChunk: true,
    }
  })
}

f5().run((err, stat) => {
  // console.log(stat.toJson())
})
