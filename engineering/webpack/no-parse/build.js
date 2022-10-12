const webpack = require('webpack')
const path = require('path')

// webpack 的运行时代码分析
function f1 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      iife: false,
    }
  })
}

function f2 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      iife: false,
    },
    module: {
      noParse (m) {
        console.log(m)
        return m.includes('midash') || m.includes('lodash')
      }
    }
  })
}

// output.path 如何指定打包目录为 build 目录
f2().run((err, stat) => {
  // console.log(JSON.stringify(stat.toJson()))
})
