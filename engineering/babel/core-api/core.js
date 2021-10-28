const babel = require('@babel/core')

const code = `
o.a ??= 3
`

function f1() {
  babel.transformAsync(code, {
    plugins: ["@babel/plugin-proposal-logical-assignment-operators"],
  }).then(o => {
    console.log(o)
  })
}

function f2() {
  babel.transformAsync('const n:number = 3', {
    presets: ["@babel/preset-typescript"],
    filename: 'index.ts'
  }).then(o => {
    console.log(o)
  })
}

f2()