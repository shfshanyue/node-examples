const path = require('path')
const _ = require('lodash')
const webpack = require('webpack')

/** @typedef {import("webpack").Configuration} Configuration */

const normalConfig = {
  entry: './index.js',
  mode: 'none',
  output: {
    filename: '[name].[id].[contenthash].js',
    chunkFilename: '[name].[id].[contenthash].chunk.js',
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

const splitChunkConfig = _.merge({}, normalConfig, {
  output: {
    path: path.resolve(__dirname, 'dist/splitchunk'),
  },
  optimization: {
    splitChunks: {
      name: 'common',
      chunks: 'all',
      minChunks: 2,
      minSize: 0,
    }
  }
})

// 将 common.js 公共模块也放在 main.js 中，common.js 还会不会被单独打出来
const initialCommonSplitChunkConfig = _.merge({}, splitChunkConfig, {
  entry: './common.index.js',
  output: {
    path: path.resolve(__dirname, 'dist/initialCommonSplitchunk'),
    clean: true
  },
  optimization: {
    splitChunks: {
      minSizeReduction: 0,
      cacheGroups: {
        default: {
          name: 'common',
          idHint: '',
          reuseExistingChunk: false,
          minChunks: 2,
          minSize: 0,
          priority: -20,
          minSizeReduction: 0,
          minRemainingSize: 0,
        }
      }
    }
  }
})

// 如果将引用的公共模块 common.js 替换为 lodash 将会如何
// lodash 未压缩未 gzip 体积 500KB+
// lodash 将会单独分包，即便不配置 splitChunks
const lodashCommonConfig = _.merge({}, normalConfig, {
  entry: './lodash.index.js',
  output: {
    path: path.resolve(__dirname, 'dist/lodashCommonConfig'),
  },
})

const initialLodashCommonSplitChunksConfig = _.merge({}, lodashCommonConfig, {
  entry: './common.lodash.index.js',
  output: {
    path: path.resolve(__dirname, 'dist/initialLodashCommonSplitChunk'),
  },
  optimization: {
    splitChunks: {
      // 试着注释它会发生什么
      chunks: 'all'
    }
  }
})

// 1. 多个 chunk 公共的 common 模块如何被打包
function f1() {
  return webpack([normalConfig, splitChunkConfig])
}

function f2() {
  return webpack([splitChunkConfig, initialCommonSplitChunkConfig])
}

function f3() {
  return webpack([normalConfig, lodashCommonConfig])
}

function f4() {
  return webpack([lodashCommonConfig, initialLodashCommonSplitChunksConfig])
}

function f5() {
  return webpack(splitChunkConfig)
}

function f6() {
  return webpack(initialCommonSplitChunkConfig)
}

function f7() {
  return webpack(initialLodashCommonSplitChunksConfig)
}

f6().run((err, stat) => {
  console.log(JSON.stringify(stat.toJson(), null, 2))
})
