const Koa = require('koa')

// Koa 是如何实现洋葱模型的

const app = new Koa()

app.use(async (ctx, next) => {
  console.log('Start 1')
  await next()
  console.log('End 1')
})

app.use(async (ctx, next) => {
  console.log('Start 2')
  await next()
  console.log('End 2')
})

app.use((ctx) => {
  ctx.body = 'hello, world'
  console.log('hello, world')
})

app.listen(3000, () => {
  console.log('Listening')
})
