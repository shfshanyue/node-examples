const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

app.use(bodyParser())

app.use(async function() {
  const body = this.request.body
  ctx.body = body
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>
  console.log(`Server ready at http://localhost:${PORT} 🚀 ..`)
)
