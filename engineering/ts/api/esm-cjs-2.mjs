import ts from 'typescript'
const { transpile, ScriptTarget, ModuleKind } = ts

// doc: https://www.typescriptlang.org/tsconfig#esModuleInterop

const input2 = `
import React from 'react'

function Counter() {
  const [count, setCount] = React.useState(0)
}
`

const input = `
import React, { useEffect } from 'react'

function Counter() {
  const [count, setCount] = React.useState(0)

  useEffect(() => {
    console.log('count', count)
  }
}
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
      allowSyntheticDefaultImports: true,
      esModuleInterop: true
    })
  )
}

f1()
f2()
f3()