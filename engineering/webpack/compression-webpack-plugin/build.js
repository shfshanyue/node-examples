const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')

// 通过 webpack-compression-plugin 可对静态资源进行 gzip/brotli 等压缩
// 压缩后将会生成文件:
//
// + index.js
// + index.js.gz
//

function f1() {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      iife: false,
      pathinfo: 'verbose',
    },
    plugins: [new CompressionPlugin({
      // algorithm: 'brotliCompress',
      // filename: '[path][base].br'
    })],
  })
}

f1().run((err, stat) => {
  // console.log(stat.toJson())
})
