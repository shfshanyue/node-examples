const webpack = require('webpack')

// 如何正确地分包？
// 
// 1. webpack 运行时代码不容易变更，需要单独抽离出来  webpack.runtime.js
// 1. React 运行时代吗不容易变更，且每个组件都会依赖它，需要单独抽离出来 react.runtime.js
// 
// 第三方库如何分包？
// 1. 一个模块被引用多次 (2次以上)，可称为公共模块，可把公共模块给抽离出来，形成 vendor.js
//
// 如果一个模块被用了多次 (2次以上)，但是该模块体积过大(1MB)，每个页面都会加载它(但是无必要，因为不是每个页面都依赖它)，导致性能变差，此时如何分包？
// 1. 如果一个模块虽是公共模块，但是该模块体积过大，可直接 import() 引入，异步加载，单独分包，比如 echarts
// 
// 如果公共模块数量多，导致 vendor.js 体积过大(1MB)，每个页面都会加载它，导致性能变差，此时如何分包
// 1. 思路一: 可对 vendor.js 改变策略，比如被引用了十次以上，被当做公共模块抽离成 verdor-A.js，五次的抽离为 vendor-B.js，两次的抽离为 vendor-C.js
// 1. 思路二: 控制 vendor.js 的体积，当大于 100KB 时，再次进行分包，多分几个 vendor-XXX.js，但每个 vendor.js 都不超过 100KB
// 1. 思路三: ......

function f1 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      clean: true,
      chunkFilename: '[name].chunk.js',
       
    },
    optimization: {
      runtimeChunk: true,
      chunkIds: 'deterministic',
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test () {

            },
            minChunks: 2,
            // maxAsyncRequests: 100,
            // maxInitialRequests: 100,
            minSize: 0,
            name: 'vendor'
          }
        }
      }
    }
  })
}

f1().run((err, stat) => {
  // console.log(stat.toJson())
})
