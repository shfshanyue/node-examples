// 1. Number.prototype.toString(2) 可以将数字转化为二进制，但是有精读缺失的问题

const mathjs = require('mathjs')

function f1 () {
  const n = 0.1.toString(2)
  console.log(n)
}

function f2 () {
  const n = mathjs.bignumber(0.1).toBinary()
  console.log(n)

  const nn = mathjs.bignumber().abs()
  console.log(nn)
}

f2()