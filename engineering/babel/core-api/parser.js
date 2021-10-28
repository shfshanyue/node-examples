const { parse } = require('@babel/parser')

let f, run;

f = () => {
  const code = `
    const a = {}
    const b = {...a}
  `
  const r = parse(code)

  return r
}

f = () => {
  const code = `
    o.a ??= 3
  `
  const r = parse(code, {
    plugins: ['logicalAssignment'],
  })

  return r
}

f = () => {
  const code = `const n:number = 3`
  const r = parse(code, {
    sourceType: "module",
    plugins: ['typescript']
  })
}

run = f

const r = run()
console.log(r.program.body)