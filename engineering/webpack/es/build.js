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

// 通过 experiments.outputModule 可配置输出为 ESM，但仍然包含大量的运行时代码
function f2 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    target: 'es2020',
    experiments: {
      outputModule: true
    },
    output: {
      filename: 'main.mjs',
    }
  })
}

// 为了方便调试，直接引用 esm 作为入口文件
function f3 () {
  return webpack({
    entry: './sum.js',
    mode: 'none',
    output: {
      filename: 'sum.js'
    }
  })
}

f3().run((err, stat) => {
  console.log(JSON.stringify(stat.toJson(), null, 2))
})
