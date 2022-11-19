const webpack = require('webpack')
const yaml = require('js-yaml');

// 对于 JSON 而言，webpack 并不会自动进行 Tree Shaking
function f1() {
  return webpack({
    entry: './index.js',
    mode: 'none',
  })
}

// 对于 JSON 而言，webpack，需手动开启 usedExports 才会进行 Tree Shaking
function f2() {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      filename: 'use-exports.main.js'
    },
    optimization: {
      usedExports: true
    }
  })
}

function f3() {
  return webpack({
    entry: './index.js',
    mode: 'production',
    output: {
      filename: 'production.main.js'
    }
  })
}

// 为了更好地调试以及测试，可直接将 json 文件作为入口
function f4() {
  return webpack({
    entry: './data.json',
    mode: 'none',
    output: {
      filename: 'data.js'
    }
  })
}

// 为了更好地调试以及测试，可直接将 json 文件作为入口
function f5() {
  return webpack({
    entry: './data.yaml',
    mode: 'none',
    module: {
      rules: [
        {
          test: /\.yaml$/,
          type: 'json',
          parser: {
            parse: yaml.load
          }
        }
      ]
    }
  })
}

function f6() {
  return webpack({
    entry: './assert-import.js',
    mode: 'none',
    output: {
      filename: 'assert.js'
    }
  })
}

f4().run((err, stat) => {
  // console.log(stat.toJson())
})