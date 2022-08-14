const rollup = require('rollup')
const commonjs = require('@rollup/plugin-commonjs')


// rollup 的发包代码经过编译，不好调试。可以下载源码，使用 npm link 方便调试

let f;

f = async () => {
  const bundle = await rollup.rollup({
    input: ['./index.js'],
    plugins: [
      commonjs({
        defaultIsModuleExports: true
      })
    ]
  })

  await bundle.write({
    file: 'dist/main.mjs',
    format: 'es'
  })
}

f()