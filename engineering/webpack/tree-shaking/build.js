const webpack = require('webpack')

function f1 () {
  return webpack({
    entry: './index.js',
    mode: 'production',
  })
}

f1().run((err, stat) => {
  // console.log(stat.toJson())
})
