const rollup = require('rollup')
const json =  require('@rollup/plugin-json')

// rollup 的发包代码经过编译，不好调试。可以下载源码，使用 npm link 方便调试
// rollup 默认不会对 JSON 进行 TreeShaking
async function f1() {
  const bundle = await rollup.rollup({
    input: ['./index.js'],
    plugins: [
      json()
    ]
  })
  return bundle.write({
    file: 'dist/rollup/main.js'
  })
}

async function f2() {
  const bundle = await rollup.rollup({
    input: ['./index.js'],
    plugins: [
      json({
        compact: true,
        preferConst: true,
        namedExports: false
      })
    ]
  })
  return bundle.write({
    file: 'dist/rollup/json-compact.main.js'
  })
}

async function f3() {
  const bundle = await rollup.rollup({
    input: ['./assert-import.js'],
    plugins: [
      json()
    ]
  })
  return bundle.write({
    file: 'dist/rollup/assert-import.js'
  })
}

f3().then(o => {
  console.log(o)
})