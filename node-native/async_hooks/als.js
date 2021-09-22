const { AsyncLocalStorage } = require('async_hooks')

const asyncLocalStorage = new AsyncLocalStorage()

const store = { userId: 10086 }
// 设置一个异步资源周期的 Store
asyncLocalStorage.run(store, () => {
  // 获取值
  asyncLocalStorage.getStore()
})