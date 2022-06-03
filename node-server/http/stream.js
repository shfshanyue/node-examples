const http = require('http')
const sleep = (seconds) => new Promise(resolve => setTimeout(resolve, seconds))

// 1. 在流式传输中，设置 content-length 的意义在哪里

// Transfer-Encoding: chunked 是在何时进行配置的
const server = http.createServer(async (req, res) => {
  // 1. 设置 content-length 的意义在哪里
  res.setHeader('content-length', 18)

  res.write('hello, ') 
  await sleep(3000)
  res.write('shanyue.')
  await sleep(3000)
  res.end('end')
})

server.listen(3000)
