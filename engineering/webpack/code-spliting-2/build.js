const path = require('path')
const webpack = require('webpack')

const _ = require('lodash')

const normalConfig = {
  entry: './index.js',
  mode: 'none',
  output: {
    filename: '[name].[id].[contenthash].js',
    chunkFilename: '[name].[id].chunk.[contenthash].js',
    path: path.resolve(__dirname, 'dist/normal'),
  },
  optimization: {
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`,
    },
    chunkIds: 'deterministic',
    moduleIds: 'deterministic'
  }
}

const splitChunkConfig = {
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
    }
  }
}

// 1. 多个 chunk 公共的 common 模块如何被打包
function f1() {
  return webpack([config1, config2])
}


f1().run((err, stat) => {
  console.log(JSON.stringify(stat.toJson(), null, 2))
})
