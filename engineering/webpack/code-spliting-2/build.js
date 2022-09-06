const path = require('path')
const webpack = require('webpack')

// 1. 多个 chunk 公共的 common 模块如何被打包
function f1 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      filename: '[main].[id].[contenthash].js',
      chunkFilename: '[name].[id].chunk.[contenthash].js',
      path: path.resolve(__dirname, 'dist/contenthash'),
    },
    optimization: {
      runtimeChunk: {
        name: entrypoint => `runtime-${entrypoint.name}`,
      },
      chunkIds: 'deterministic',
      moduleIds: 'deterministic'
    }
  })
}


function f2 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      filename: '[name].[id].[contenthash].js',
      chunkFilename: '[name].[id].chunk.[contenthash].js',
      path: path.resolve(__dirname, 'dist/splitchunk'),
    },
    optimization: {
      runtimeChunk: {
        name: entrypoint => `runtime-${entrypoint.name}`,
      },
      chunkIds: 'deterministic',
      moduleIds: 'deterministic',
      splitChunks: {
        name: 'common',
        chunks: 'all',
        minChunks: 2,
        minSize: 0,
        reuseExistingChunk: true
      }
    }
  })
}


f2().run((err, stat) => {
  console.log(JSON.stringify(stat.toJson(), null, 2))
})
