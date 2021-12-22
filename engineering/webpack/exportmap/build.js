const webpack = require('webpack')

// exports 可根据当前环境判断引入哪个文件，在 webpack 中可以通过 `target` 字段进行判断
// f1: 示例为 web 端
// f2: 示例为 node 端

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

function f2 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      iife: false,
      pathinfo: 'verbose'
    },
    target: 'node'
  })
}

f1().run((err, stat) => {
  // console.log(stat.toJson())
})
