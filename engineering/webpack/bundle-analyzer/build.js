const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// 1. BundleAnalyzerPlugin 是如何工作的？
// 2. Stat、Parsed、Gziped 分别是何意义？
// 3. terserplugin 对此结果有影响吗？

function f1 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  })
}

f1().run((err, stat) => {
})
