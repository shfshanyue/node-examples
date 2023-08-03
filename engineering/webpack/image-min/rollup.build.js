const rollup = require('rollup')
const image =  require('@rollup/plugin-image')

async function f1() {
  const bundle = await rollup.rollup({
    input: ['./index.js'],
    plugins: [
      image()
    ]
  })
  return bundle.write({
    file: 'dist/rollup/main.js'
  })
}

f1().then(o => {
  console.log(o)
})