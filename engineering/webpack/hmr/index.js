import { add } from './add'

console.log(add(3, 3))

if (module.hot) {
  module.hot.accept('./add', () => {
    console.log('ADD')
  })
}