import ts from 'typescript'
const { transpile, ScriptTarget, ModuleKind } = ts

// doc: https://www.typescriptlang.org/tsconfig#esModuleInterop

const input = `
export function add(a: number, b: number): number {
  return a + b
}

export function subtract(a: number, b: number): number {
  return a - b;
}

const name = 'math';
export default name;
`

function f1() {
  console.log(
    transpile(input, {
      target: ScriptTarget.ESNext,
      module: ModuleKind.CommonJS,
    })
  )
}

function f2() {
  console.log(
    transpile(input, {
      target: ScriptTarget.ESNext,
      module: ModuleKind.CommonJS,
      allowSyntheticDefaultImports: true
    })
  )
}

function f3() {
  console.log(
    transpile(input, {
      target: ScriptTarget.ESNext,
      module: ModuleKind.CommonJS,
      // allowSyntheticDefaultImports: true,
      esModuleInterop: true
    })
  )
}

f1()
f2()
f3()