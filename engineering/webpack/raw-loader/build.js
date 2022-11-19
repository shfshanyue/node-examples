const webpack = require('webpack')
const path = require('path')

// webpack 的运行时代码分析
function f1 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      iife: false,
      pathinfo: 'verbose'
    },
    module: {
      rules: [
        {
          test: /\.txt$/,
          type: 'asset/source'
        },
        {
          test: /\.txt$/,
          type: 'asset/source'
        },
        {
          type: 'asset/source',
          resourceQuery: /raw/,
        }
      ]
    }
  })
}

// output.path 如何指定打包目录为 build 目录
f1().run((err, stat) => {
  // console.log(JSON.stringify(stat.toJson()))
})
