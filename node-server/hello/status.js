const http = require('http')

// 1. headersSent 是否已经把响应头发送，headersSent 之后再发送数据或者状态码无效

const f1 = (req, res) => {
  // res 会自动将状态码翻译为 statusMessage
  res.statusCode = 404
  res.end('hello, world')
}

const f2 = (req, res) => {
  console.log(res.headersSent)
  res.end('hello, world')
  console.log(res.headersSent)
  res.statusCode = 404
}

const server = http.createServer(f2)
server.listen(3000)
