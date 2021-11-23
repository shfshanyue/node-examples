const webpack = require('webpack')
const path = require('path')

function f1 () {
  return webpack({
    experiments: {
      outputModule: true
    },
    entry: './index.js',
    mode: 'none',
    output: {
      iife: false,
      pathinfo: 'verbose',
      module: true,
      libraryTarget: 'module'
    }
  })
}

f1().run((err, stat) => {
  // console.log(stat.toJson())
})
