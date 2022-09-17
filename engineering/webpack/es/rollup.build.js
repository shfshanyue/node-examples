const rollup = require('rollup')

// rollup 的发包代码经过编译，不好调试。可以下载源码，使用 npm link 方便调试
async function f1() {
  const bundle = await rollup.rollup({
    input: ['./index.js'],
  })
  return bundle.write({
    file: 'dist/rollup/main.js'
  })
}

f1().then(o => {
  console.log(o)
})