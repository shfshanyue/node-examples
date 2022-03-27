const iconv = require('iconv-lite')
const { Response } = require('undici')

const str = '山月'
const emoji = '🍉🍇'

function f1 () {
  new Response(str).arrayBuffer(b => new Uint8Array(b)).then(b => {
    console.log(b)
  })
}

// 在 iconv 中可以将字符串用以 utf16 编码，而 TextEncoder 不行
function f2 () {
  const b = iconv.encode(str, 'utf16')
  console.log(b)
  console.log(new Uint8Array(b))

  const c = iconv.encode(emoji, 'utf16')
  console.log(c)
  console.log(new Uint8Array(c))
}

function f3 () {
  const enc = new TextEncoder()
  const b = enc.encode(str)
  console.log(b)
}

function f4 () {
  iconv.decode('', 'utf16')
}

f2()