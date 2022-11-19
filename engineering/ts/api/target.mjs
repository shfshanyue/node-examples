import ts from 'typescript'
const { transpile, ScriptTarget, ModuleKind } = ts

const input = `
function sum (x: number, y: number) {
  return x + y
}

const o: any = {}
// ES2020
const a = o?.a?.b?.c

// ES2021
const any = Promise.any

export {
  sum,
  a,
  any
}
`

console.log('-'.repeat(100))
console.log('Target ES2021')
console.log('-'.repeat(100))
console.log(
  transpile(input, {
    // 将代码转换为 ES2021 支持的格式，比如 Optional Chaining Operator 将不会有垫片
    target: ScriptTarget.ES2021,
  
    module: ModuleKind.ESNext
  })
)

console.log('-'.repeat(100))
console.log('Target ES2015')
console.log('-'.repeat(100))
console.log(
  transpile(input, {
    // 将代码转换为 ES2015 支持的格式，比如 Optional Chaining Operator 将会有垫片
    target: ScriptTarget.ES2015,

    module: ModuleKind.ESNext
  })
)