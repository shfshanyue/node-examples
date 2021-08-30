const Koa = require('koa')

const app = new Koa()

app.use((ctx) => {
  ctx.body = { hello: 'world' }
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>
  console.log(`Server ready at http://localhost:${PORT} 🚀 ..`)
)
