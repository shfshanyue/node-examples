import(/* webpackChunkName: "foo" */ './lodash.foo').then(m => {
  console.log(m.name)
})

import(/* webpackChunkName: "bar" */ './lodash.bar').then(m => {
  console.log(m.name)
})
