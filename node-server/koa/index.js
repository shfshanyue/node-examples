const Koa = require('koa')
const { Readable } = require('stream')

// Koa Hello World
// 1. 了解 koa 的洋葱模型核心，即 koa-compose
// 2. koa 是如何捕获异常的 (基于 event-emitter)
// 3. koa 是如何处理状态码的 (ctx.body)
// 4. koa 是如何发送 JSON 数据的
// 5. koa 是如何发送 Stream 数据的
// 6. koa 是如何处理 querystring 的
// 7. koa context 是如何代理 request/response 的

const app = new Koa()
let handleRequest, f

f = ctx => {
  ctx.body = 'hello, world'
}

// 如何响应 json
f = ctx => {
  ctx.body = { hello: 'world' }
}

// 如何响应 stream
f = ctx => {
  // 如果不配置 ctx.type，再浏览器中会直接下载
  // 原因为当响应数据为流时，会自动设置 Content-Type: 'application/octet-stream'

  // ctx.type = 'text'
  ctx.body = Readable.from('hello, world')
}

f = (ctx) => {
  // Koa 通过 parseurl 这个库进行 URL 解析
  // parseurl 将只会解析一次，进行缓存，不会重复解析，可查看其 fresh 方法
  // https://github.com/pillarjs/parseurl/blob/master/index.js#L153
  const a = ctx.query.a
  const b = ctx.query.b
  const path = ctx.path
  ctx.body = ctx.query
}

f = (ctx) => {
  const charset = ctx.request.charset

  const b = ctx.request.charset

  ctx.request.accepts('json')
  ctx.body = charset
}

handleRequest = f

app.use(handleRequest)

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>
  console.log(`Server ready at http://localhost:${PORT} 🚀 ..`)
)
