import ts from 'typescript'
const { transpile, ScriptTarget } = ts

// source: https://github.com/microsoft/TypeScript/tree/main/lib
// doc: https://www.typescriptlang.org/tsconfig#lib
// https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-beta/#supporting-lib-from-node_modules
// 提供 .d.ts 的支持

const input = `
const any = Promise.any
const get = document.getElmentById

export {
  any,
  get
}
`

// 感觉 lib 对编译没有啥影响
const output = transpile(input, {
  lib: [
    'ES2016',
  ],
  target: ScriptTarget.ES2015
})

console.log(output)
