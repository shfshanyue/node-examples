const webpack = require('webpack')

// 参考文档: https://webpack.js.org/guides/asset-modules/#url-assets

function f1 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    module: {
      rules: [
        {
          dependency: 'url',
          type: 'asset/resouce',
        }
      ]
    }
  })
}

f1().run((err, stat) => {
  // console.log(stat.toJson())
})
