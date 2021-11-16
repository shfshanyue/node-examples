// import prettier from 'prettier'
const prettier = require('prettier')

const content = prettier.format(`
## hello

### Heading 1




### Heading 2
`, {
  parser: 'markdown'
})

console.log(content)
