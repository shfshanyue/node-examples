const rollup = require('rollup')
const html = require('@rollup/plugin-html')

// rollup 的发包代码经过编译，不好调试。可以下载源码，使用 npm link 方便调试
//
// [@roollup/plugin-html](https://github.com/rollup/plugins/tree/master/packages/html)

let f;

f = async () => {
  const bundle = await rollup.rollup({
    input: ['./index.js'],
    plugins: [html()]
  })

  await bundle.write({
    file: 'dist/main.js',
    format: 'es'
  })
}

f()