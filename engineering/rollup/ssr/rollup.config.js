import replace from '@rollup/plugin-replace'

export default [
  {
    input: './index.js',
    output: {
      file: 'dist/base64.browser.js'
    },
    plugins: [
      replace({
        'process.env.BROWSER': true
      })
    ]
  }, {
    input: './index.js',
    output: {
      file: 'dist/base64.node.js'
    },
    plugins: [
      replace({
        'process.env.BROWSER': false
      })
    ]
  }
]