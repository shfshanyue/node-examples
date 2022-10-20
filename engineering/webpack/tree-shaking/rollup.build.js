const rollup = require('rollup')

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