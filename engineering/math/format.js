const mathjs = require('mathjs')

function f1 () {
  const n = mathjs.format(Number('1e39'), { notation: 'fixed' })
  console.log(n)
}

function f2 () {
  const n = mathjs.format(Number('1e-69'), { notation: 'fixed' })
  console.log(n)
}

function f3 () {
  // 此时如果使用 Number 进行转化，则会丢失进度，而 bignumber 不会
  const n = mathjs.format(mathjs.bignumber('10000.000000000000000000000000000000000000000000000000000000000000000000001'), { notation: 'fixed' })
  console.log(n)
}

function f4 () {
  const n = mathjs.format(mathjs.bignumber(Number.NaN), { notation: 'fixed'} )
  console.log(n)
}

function f5 () {
  const n = mathjs.format(mathjs.bignumber(Infinity), { notation: 'fixed'} )
  console.log(n)
}

f4()