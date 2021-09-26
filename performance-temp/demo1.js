const { createHash } = require('crypto')

let result;

console.time('XXX')
for (let i = 0; i < 10e4; i++) {
  const hash = createHash('md5')
  // hash.update('fhqwhgads', 'utf16le')
  hash.update('hello, world')
  hash.update('hello, world')
  hash.update('hello, world')
  hash.update('hello, world')
  hash.update('hello, world')
  hash.update('hello, world')
  hash.update('hello, world')
  result = hash.digest('hex')
}
console.log(result)
console.timeEnd('XXX')

console.time('YYY')
const a = Buffer.from('hello, world')
for (let i = 0; i < 10e4; i++) {
  const hash = createHash('md5')
  const buf = Buffer.concat([
    // Buffer.from('fhqwhgads', 'utf16le'),
    a,
    a,
    a,
    a,
    a,
    a,
    a
  ])
  hash.update(buf)
  result = hash.digest('hex')
}
console.log(result)
console.timeEnd('YYY')



console.time('YYY')
for (let i = 0; i < 10e4; i++) {
  const hash = createHash('md5')
  const buf = 'hello, world' +
    'hello, world' +
    'hello, world' +
    'hello, world' +
    'hello, world' +
    'hello, world' +
    'hello, world'
  hash.update(buf)
  result = hash.digest('hex')
}
console.log(result)
console.timeEnd('YYY')