import hello from './index.txt';
import code from '!!raw-loader!./hello.js'
import code2 from './hello.js?raw'
import code3 from './hello.js'

console.log(hello)
console.log(code)
console.log(code2)
console.log(code3)
