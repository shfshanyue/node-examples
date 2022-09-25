const webpack = require('webpack')
const path = require('path')

function f1 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      clean: true,
      filename: '[name].[contenthash:6].js',
      chunkFilename: '[name].[contenthash:6].chunk.js'
    },
    optimization: {
      splitChunks: {
        filename: '[name].[contenthash:6].split.chunk.js',
        chunks: 'all',
        minSize: 0,
        cacheGroups: {
          midash: {
            name: 'midash',
            test (module) {
              return module.rawRequest === 'midash'
            },
          },
          lodash: {
            name: 'lodash',
            test (module) {
              return module.rawRequest === 'lodash'
            },
          },
        }
      },
      runtimeChunk: true
    }
  })
}

// output.path 如何指定打包目录为 build 目录
f1().run((err, stat) => {
  console.log(JSON.stringify(stat.toJson()))
})
