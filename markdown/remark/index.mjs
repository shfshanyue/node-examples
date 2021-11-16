import {unified} from 'unified'
import remarkParse from 'remark-parse'

const tree = unified()
  .use(remarkParse)
  .parse('+ A\n+ B')

console.log(tree)
