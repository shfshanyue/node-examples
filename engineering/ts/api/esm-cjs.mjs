import ts from 'typescript'
const { transpile, ScriptTarget, ModuleKind } = ts

// doc: https://www.typescriptlang.org/tsconfig#esModuleInterop

const input = `
import { get } from 'midash'
import React from 'react'

console.log(get)
console.log(React.createRoot)
`

console.log('-'.repeat(100))
console.log('Default')
console.log('-'.repeat(100))
console.log(
  transpile(input, {
    target: ScriptTarget.ES2021,
    module: ModuleKind.CommonJS,
    allowSyntheticDefaultImports: true
  })
)

console.log('-'.repeat(100))
console.log('esModuleInterop')
console.log('-'.repeat(100))
console.log(
  transpile(input, {
    target: ScriptTarget.ES2021,
    module: ModuleKind.CommonJS,
    allowSyntheticDefaultImports: true,
    esModuleInterop: true
  })
)
