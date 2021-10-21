const webpack = require('webpack')
const path = require('path')


const compiler = webpack({
  entry: './index.js',
  mode: 'none',
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '.cache'),
    name: 'cache'
  }
})

compiler.run(() => {
  console.log('DONE')
})