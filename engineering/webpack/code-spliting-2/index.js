import { name } from './common'
import { name as share} from './share'

console.log(name, share)

import(/* webpackChunkName: "foo" */ './foo').then(m => {
  console.log(m.name)
})

import(/* webpackChunkName: "bar" */ './bar').then(m => {
  console.log(m.name)
})
