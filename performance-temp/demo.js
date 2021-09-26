const { createHash } = require('crypto')

let result

{
  console.time('F')
  const a = (Buffer.from('h'))
  const b = (Buffer.from('ello'))
  const c = (Buffer.from(', '))
  const d = (Buffer.from('w'))
  const e = (Buffer.from('o'))
  const f = (Buffer.from('r'))
  const j = (Buffer.from('ld'))
  const buf = Buffer.concat([a, b, c, d, e, f, j])
  for (let i = 0; i < 10e4; i++) {
    const hash = createHash('md5')
    hash.update(buf)
    result = hash.digest()
  }
  console.timeEnd('F')
}
console.time('String')
for (let i = 0; i < 10e4; i++) {
  createHash('md5').update('hello, world').digest()
}
console.timeEnd('String')

console.time('Multi String')
for (let i = 0; i < 10e4; i++) {
  const hash = createHash('md5')
  hash.update('h')
  hash.update('ello')
  hash.update(', ')
  hash.update('w')
  hash.update('o')
  hash.update('r')
  hash.update('ld')
  hash.digest()
}
console.timeEnd('Multi String')

console.time('Buffer')
const buf = Buffer.from('hello, world')
for (let i = 0; i < 10e4; i++) {
  result = createHash('md5').update(buf).digest()
}
console.timeEnd('Buffer')


console.time('Multi Buffer')
const a = (Buffer.from('h'))
const b = (Buffer.from('ello'))
const c = (Buffer.from(', '))
const d = (Buffer.from('w'))
const e = (Buffer.from('o'))
const f = (Buffer.from('r'))
const j = (Buffer.from('ld'))
for (let i = 0; i < 10e4; i++) {
  const hash = createHash('md5')
  hash.update(a)
  hash.update(b)
  hash.update(c)
  hash.update(d)
  hash.update(e)
  hash.update(f)
  hash.update(j)
  hash.digest()
}
console.timeEnd('Multi Buffer')


