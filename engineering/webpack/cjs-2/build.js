const webpack = require('webpack')
const path = require('path')

// 观察对四个模块的打包，复制 moduleId 的过程是深度优先还是广度优先
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

// output.path 如何指定打包目录为 build 目录
f1().run((err, stat) => {
  console.log(JSON.stringify(stat.toJson()))
})
