const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', (ctx, next) => {
  ctx.body = 'hello, world'
})

router.get('/api/users', (ctx, next) => {
  ctx.body = 'hello, world'
})

// 如果书写了 next()：要把最具体的路由放到最后边
// 如果未书写 next()：要把最具体的路由放到最前边
router.get('/api/users/10086', (ctx, next) => {
  console.log(ctx.router)
  ctx.body = {
    userId: 10086,
    direct: true
  }
})

router.get('/api/users/:userId', (ctx, next) => {
  console.log(ctx.router)
  ctx.body = {
    userId: ctx.params.userId
  }
})

app.use(router.routes())
app.listen(3000, () => console.log("Listing 3000 Port..."))
