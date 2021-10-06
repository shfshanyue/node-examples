const Linter = require("eslint").Linter
const linter = new Linter()

const code = `
var a = 3;
`
const messages = linter.verify(code, {
  rules: {
    semi: [
      'error', 'never'
    ]
  }
})

console.log(messages)