const webpack = require('webpack')

// 对于 JSON 而言，webpack 并不会自动进行 Tree Shaking
function f1() {
  return webpack({
    entry: './index.ts',
    mode: 'none',
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
        },
      ],
    },
  })
}

f1().run((err, stat) => {
  // console.log(stat.toJson())
})