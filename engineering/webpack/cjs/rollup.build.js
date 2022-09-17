const rollup = require('rollup')
const commonjs = require('@rollup/plugin-commonjs')

// 1. rollup 直接编译为 ESM，而非 CommonJS
// 2. rollup 中 defaultIsModuleExports

// rollup 的发包代码经过编译，不好调试。可以下载源码，使用 npm link 方便调试
async function f1() {
  const bundle = await rollup.rollup({
    input: ['./index.js'],
    plugins: [
      commonjs({
        defaultIsModuleExports: true
      })
    ]
  })

  return bundle.write({
    file: 'dist/rollup/main.js'
  })
}

f1().then(o => {
  console.log(o)
})