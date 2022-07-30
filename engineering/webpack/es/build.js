const webpack = require('webpack')

// `webpack-cli` 与 `webpack/cli` 调来调去，逻辑复杂，为了方便，直接使用其 node api 进行示例，方便调试

// 1. 关于 ES 理解 webpack 的运行时代码
// 2. ES Module 是如何转化为 CommonJS 的
// 

function f1 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
  })
}

f1().run((err, stat) => {
  // console.log(stat.toJson())
})
