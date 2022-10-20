const { SyncBailHook } = require('tapable')

const one = new SyncBailHook()
const two = new SyncBailHook()
const three = new SyncBailHook()

// 订阅 -> 注册
one.tap('one', () => {
  console.log('1.1')
  // 如果此处 return，则不会执行该 hook 的下一个注册函数，并且 call 时，会得到 1.1 返回值
  return 1.1
})

// 首参数可以是任意字符，回调函数里边也啥都没有
one.tap('可以是任意字符...', (...args) => {
  console.log('1.2')
})

two.tap('two', () => {
  console.log('2.1')
})

three.tap('three', () => {
  console.log('3.1')
  return 3.1
})

// 模拟生命周期
function main() {
  //=> 1.1
  const a = one.call()
  const b = two.call()

  const c = three.callAsync(() => {})

  console.log(a, b, c)
}

main()