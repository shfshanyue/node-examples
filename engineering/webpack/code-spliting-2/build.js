const path = require('path')
const webpack = require('webpack')

function f1 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      filename: 'main.[id].[contenthash].js',
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


f1().run((err, stat) => {
  console.log(JSON.stringify(stat.toJson(), null, 2))
})
