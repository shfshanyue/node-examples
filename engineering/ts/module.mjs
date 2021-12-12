import ts from 'typescript'
const { transpile, ScriptTarget, ModuleKind } = ts

const options1 = {
  // 将代码转换为 ES2021 支持的格式，比如 Optional Chaining Operator 将不会有垫片
  target: ScriptTarget.ES2021,

  // 将代码模块化方案由 ESM 转化为 CommonJS 格式 (默认 None 为 CommonJS)
  module: ModuleKind.None
}

const options2 = {
  // 将代码转换为 ES2021 支持的格式，比如 Optional Chaining Operator 将不会有垫片
  target: ScriptTarget.ES2021,

  // 将代码模块化方案由 ESM 转化为 UMD 格式
  // 即 function(factory) IIFE 函数
  module: ModuleKind.UMD
}

const options3 = {
  // 将代码转换为 ES2021 支持的格式，比如 Optional Chaining Operator 将不会有垫片
  target: ScriptTarget.ES2021,

  // 将代码模块化方案由 ESM 转化为 System 格式
  // 即 System.register 函数
  module: ModuleKind.System
}

const options4 = {
  // 将代码转换为 ES2021 支持的格式，比如 Optional Chaining Operator 将不会有垫片
  target: ScriptTarget.ES2021,

  // 将代码模块化方案由 ESM 转化为 CommonJS 格式
  // 即 module.exports/require
  // 值为 None、Node12、NodeNext、CommonJS 拥有相同的效果
  module: ModuleKind.CommonJS
}

const options5 = {
  // 将代码转换为 ES2021 支持的格式，比如 Optional Chaining Operator 将不会有垫片
  target: ScriptTarget.ES2021,

  // 将代码模块化方案由 ESM 转化为 ESM 格式
  // 即 import/export
  // 值为 ES2015、ES2020、ES2022、ESNext 拥有相同的效果
  module: ModuleKind.ESNext
}

const options6 = {
  // 将代码转换为 ES2015 支持的格式，比如 Optional Chaining Operator 将会有垫片
  target: ScriptTarget.ES2015,

  // 将代码模块化方案由 ESM 转化为 ESM 格式
  // 即 import/export
  // 值为 ES2015、ES2020、ES2022、ESNext 拥有相同的效果
  module: ModuleKind.ESNext
}

const input = `
function sum (x: number, y: number) {
  return x + y
}

const o: any = {}
const a = o?.a?.b?.c

const any = Promise.any

export {
  sum,
  a,
  any
}
`

const output = transpile(input, options6)

console.log(output)
