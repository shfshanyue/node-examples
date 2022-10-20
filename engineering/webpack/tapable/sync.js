const { SyncHook } = require('tapable')

function f1 () {
  // 1. 如果 hook.call 时需要传递参数，则刚开始创建 Hook 时，需要使用一个字符串进行占位
  const one = new SyncHook(['data'])

  // 订阅 -> 注册
  // 2. tap 第一个参数是一个随机字符串时，代表该 tap 的 name，与 { name: 'one' } 等效
  one.tap('one', (data) => {
    // 可以接收到传递的参数
    console.log('1.1', 'ARGS', data)
  })

  // 首参数可以是任意字符，回调函数里边也啥都没有
  one.tap('可以是任意字符...', (data) => {
    console.log('1.2', 'ARGS', data)
  })

  // 3. 调用时顺序，默认按照 tap 注册顺序进行调用
  one.call({ a: 3, b: 4 })
}

function f2 () {
  const one = new SyncHook(['data'])

  // 订阅 -> 注册
  one.tap({
    name: '天',
    // 4. 调用时顺序，如果有 stage 参数，则按照其从小到大调用，比如该示例先输出 1.2，在输出 1.1
    stage: 10
  }, (data) => {
    console.log('1.1', 'ARGS', data)
  })

  one.tap({
    name: '地',
    stage: 1
  }, (data) => {
    console.log('1.2', 'ARGS', data)
  })

  one.call({ a: 3, b: 4 })
}

f2()