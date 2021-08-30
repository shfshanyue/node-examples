const http = require('http')
const sleep = (seconds) => new Promise(resolve => setTimeout(resolve, seconds))

// Transfer-Encoding: chunked 是在何时进行配置的
const server = http.createServer(async (req, res) => {
  res.write('hello.') 
  await sleep(3000)
  res.write('shanyue')
  await sleep(3000)
  res.end()
})

server.listen(3000)
