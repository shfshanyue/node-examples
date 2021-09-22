const Koa = require('koa')

const app = new Koa()
const sleep = (seconds) => new Promise(resolve => setTimeout(resolve, seconds))

app.use(async (ctx) => {
  ctx.type = 'text/plain;charset=utf-8'
  // ctx.res.write('松风吹解带')
  // // await sleep(1000)
  // ctx.res.write('山月照弹琴')
  // await sleep(1000)
  // ctx.res.end('hello, world')
  ctx.body = 'asdf'
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>
  console.log(`Server ready at http://localhost:${PORT} 🚀 ..`)
)
