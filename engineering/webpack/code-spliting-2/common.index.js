// 当把 common 在 main.js 引入又会发生什么呢，common 还会单独打包吗

import { name } from './common'

console.log(name)

import(/* webpackChunkName: "foo" */ './foo').then(m => {
  console.log(m.name)
})

import(/* webpackChunkName: "bar" */ './bar').then(m => {
  console.log(m.name)
})
