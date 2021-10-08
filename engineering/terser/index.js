const { minify } = require('terser')

let run, f;

f = async () => {
  const code = 'function add(first, second) { return first + second; }'
  const result = await minify(code, { sourceMap: true })
  console.log(result.code)
  console.log(result.map)
}

run = f

run()