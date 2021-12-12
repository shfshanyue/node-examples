import ts from 'typescript'
const { transpile, ScriptTarget } = ts

// https://github.com/microsoft/TypeScript/tree/main/lib
// 提供 .d.ts 的支持

const options1 = {
  lib: [
    'ES2016'
  ],
  target: ScriptTarget.ES2015
}

const input = `
const any = Promise.any
const get = document.getElmentById

export {
  any,
  get
}
`

const output = transpile(input, options1)

console.log(output)
