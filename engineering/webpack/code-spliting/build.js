const path = require('path')
const webpack = require('webpack')

// 如何正确地分包？
// 
// 1. webpack 运行时代码不容易变更，需要单独抽离出来  webpack.runtime.js
// 2. React 运行时代吗不容易变更，且每个组件都会依赖它，需要单独抽离出来 react.runtime.js
// 
// 第三方库如何分包？
// 1. 一个模块被引用多次 (2次以上)，可称为公共模块，可把公共模块给抽离出来，形成 vendor.js
//
// 如果一个模块被用了多次 (2次以上)，但是该模块体积过大(1MB)，每个页面都会加载它(但是无必要，因为不是每个页面都依赖它)，导致性能变差，此时如何分包？
// 1. 如果一个模块虽是公共模块，但是该模块体积过大，可直接 import() 引入，异步加载，单独分包，比如 echarts
// 
// 如果公共模块数量多，导致 vendor.js 体积过大(1MB)，每个页面都会加载它，导致性能变差，此时如何分包
// 1. 思路一: 可对 vendor.js 改变策略，比如被引用了十次以上，被当做公共模块抽离成 verdor-A.js，五次的抽离为 vendor-B.js，两次的抽离为 vendor-C.js
// 2. 思路二: 控制 vendor.js 的体积，当大于 100KB 时，再次进行分包，多分几个 vendor-XXX.js，但每个 vendor.js 都不超过 100KB
// 3. 思路三: ......
// 
//
// 思考以下问题：
//
// 1. import() 打包后运行时代码长什么样子
// 2. chunkFilename 与 filename 有何区别
// 3. import() 加载 chunk 除了 JSONP，用 import 的方式加载如何
// 4. deterministic 有何作用
// 5. magic comment

function f1 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      filename: '[name].[id].[contenthash].js',
      chunkFilename: '[name].[id].chunk.[contenthash].js',
      path: path.resolve(__dirname, 'dist/contenthash'),
    }
  })
}

function f2 () {
  return webpack([{
    entry: './comment.index.js',
    mode: 'none',
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[id].chunk.[contenthash].js',
      path: path.resolve(__dirname, 'dist/comment')
    }
  }, {
    entry: './prefetch.index.js',
    mode: 'none',
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[id].chunk.[contenthash].js',
      path: path.resolve(__dirname, 'dist/prefetch')
    }
  }])
}

function f3 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      filename: 'main.[contenthash].js',
      chunkFilename: '[name].chunk.[chunkhash].js',
      path: path.resolve(__dirname, 'dist/import'),
      clean: true,
      // chunkLoading: 'import',
      // chunkFormat: 'module',
      chunkLoadingGlobal: 'hello'
    }
  })
}

// 通过配置 deterministic，可获得确定的 moduleId 与 chunkId
function f4 () {
  return webpack({
    entry: './comment.index.js',
    mode: 'none',
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: 'chunk.[name].[id].[contenthash].js',
      path: path.resolve(__dirname, 'dist/deterministic'),
      clean: true
    },
    optimization: {
      moduleIds: 'deterministic',
      chunkIds: 'deterministic'
    }
  })
}

// 当 runtimeChunk 设置为 true 时，将单独把 webpack 的运行时给独立出来
function f5 () {
  return webpack({
    entry: './comment.index.js',
    mode: 'none',
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].chunk.js',
      path: path.resolve(__dirname, 'dist/runtime'),
    },
    optimization: {
      moduleIds: 'deterministic',
      chunkIds: 'deterministic',
      runtimeChunk: true
    }
  })
}

// 通过 experiments.outputModule 可配置打包为 ESM
function f7 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    target: 'es2020',
    experiments: {
      outputModule: true
    },
    output: {
      module: true,
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].chunk.js',
      path: path.resolve(__dirname, 'dist/module'),
      clean: true
    },
    optimization: {
      moduleIds: 'deterministic',
      chunkIds: 'deterministic',
      runtimeChunk: true
    }
  })
}

f5().run((err, stat) => {
  console.log(JSON.stringify(stat.toJson(), null, 2))
})
