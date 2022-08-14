const path = require('path')
const webpack = require('webpack')

// 1. import() 打包后运行时代码长什么样子
// 2. chunkFilename 与 filename 有何区别
// 3. import() 加载 chunk 除了 JSONP，用 import 的方式加载如何
// 4. deterministic 有何作用
// 5. magic comment

function f1 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      filename: 'main.[id].[contenthash].js',
      chunkFilename: '[name].[id].chunk.[contenthash].js',
      path: path.resolve(__dirname, 'dist/contenthash'),
      clean: true
    }
  })
}

function f2 () {
  return webpack({
    entry: './magic.index.js',
    mode: 'none',
    output: {
      filename: 'main.[contenthash].js',
      chunkFilename: '[name].[id].chunk.[contenthash].js',
      path: path.resolve(__dirname, 'dist/magic')
    }
  })
}

function f3 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      filename: 'main.[contenthash].js',
      chunkFilename: '[name].chunk.[chunkhash].js',
      path: path.resolve(__dirname, 'dist/import'),
      clean: true,
      chunkLoading: 'import'
    }
  })
}

function f4 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: 'chunk.[name].[id].[contenthash].js',
      path: path.resolve(__dirname, 'dist/deterministic'),
      clean: true
    },
    optimization: {
      moduleIds: 'deterministic',
      chunkIds: 'deterministic'
    }
  })
}

// 当 runtimeChunk 设置为 true 时，将单独把 webpack 的运行时给独立出来
function f5 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].chunk.js',
      path: path.resolve(__dirname, 'dist/runtime'),
      clean: true
    },
    optimization: {
      moduleIds: 'deterministic',
      chunkIds: 'deterministic',
      runtimeChunk: true
    }
  })
}

f1().run((err, stat) => {
  console.log(JSON.stringify(stat.toJson(), null, 2))
})
