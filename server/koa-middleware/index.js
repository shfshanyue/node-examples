const Koa = require('koa')

const app = new Koa()

app.use(async (ctx, next) => {
  await next()
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
