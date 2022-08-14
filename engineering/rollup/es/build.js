const rollup = require('rollup')

// rollup 的发包代码经过编译，不好调试。可以下载源码，使用 npm link 方便调试

async function f1 () {
  const bundle = await rollup.rollup({
    input: ['./index.js'],
  })

  const data = await bundle.write({
    file: 'dist/main.mjs',
    format: 'es'
  })

  console.log(data)
}

f1()
