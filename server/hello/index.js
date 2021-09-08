const http = require('http')
const fs = require('fs')

// 运行示例的编号
const RUN_ID = 3
const requestLiteners = [() => {}]

// 示例一: hello, world
{
  const handleRequest = (req, res) => {
    // res.end 表示所有的 header 以及 body 发送完毕，Server 将标记该 Message 为 complete
    res.end('hello, world')
  }

  requestLiteners.push(handleRequest)
}

// 示例二: Transfer-Encoding
{
  // 当调用了 res.write 及 res.end 时，报文将以 Transfer-Encoding: chunked 返回，与示例一不同
  const handleRequest = (req, res) => {
    res.write('hello, world')
    res.end()
  }

  requestLiteners.push(handleRequest)
}

// 示例三: stream
{
  const handleRequest = (req, res) => {
    fs.createReadStream('../../package.json', {
      // highWaterMark: 16
    }).pipe(res)
  }

  requestLiteners.push(handleRequest)
}

const server = http.createServer(requestLiteners[RUN_ID])
server.listen(3200)
