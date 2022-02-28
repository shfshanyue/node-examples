const iconv = require('iconv-lite')
const { Response } = require('undici')

const str = '山月'

function f1 () {
  new Response(str).arrayBuffer(b => new Uint8Array(b)).then(b => {
    console.log(b)
  })
}

function f2 () {
  const b = iconv.encode(str, 'utf16')
  console.log(b)
  console.log(new Uint8Array(b))
}

function f3 () {
  const enc = new TextEncoder()
  const b = enc.encode(str)
  console.log(b)
}

f2()