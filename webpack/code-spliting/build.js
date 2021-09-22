const path = require('path')
const webpack = require('webpack')

// `webpack-cli` 与 `webpack/cli` 调来调去，逻辑复杂，为了方便，直接使用其 node api 进行示例，方便调试

// 1. 当有 chunk 时，webpack 的运行时代码是如何加载 chunk 的
// 1. [contenthash].js 中的 hash 是如何生成的
// 

function f1 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      filename: 'main.[contenthash].js',
      chunkFilename: '[id].chunk.[contenthash].js',
      path: path.resolve(__dirname, 'dist/contenthash')
    }
  })
}

function f2 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      filename: 'main.[contenthash].js',
      chunkFilename: '[id].chunk.[chunkhash].js',
      path: path.resolve(__dirname, 'dist/chunkhash')
    }
  })
}

function f3 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: 'chunk.[name].[id].[contenthash].js',
      path: path.resolve(__dirname, 'dist/deterministic')
    },
    optimization: {
      moduleIds: 'deterministic',
      chunkIds: 'deterministic'
    }
  })
}

function f4 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].chunk.js',
      path: path.resolve(__dirname, 'dist/runtime')
    },
    optimization: {
      moduleIds: 'deterministic',
      chunkIds: 'deterministic',
      runtimeChunk: true
    }
  })
}

f4().run((err, stat) => {
  console.log(stat.toJson())
})
