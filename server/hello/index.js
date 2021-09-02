const http = require('http')

const RUNID = 2
const servers = [0]

{
  const server = http.createServer((req, res) => {
    // res.end 表示所有的 header 以及 body 发送完毕，Server 将标记该 Message 为 complete
    res.end('hello, world')
  })

  servers.push(server)
}

{
  // 当调用了 res.write 及 res.end 时，报文将以 Transfer-Encoding: chunked 返回，与示例一不同
  const server = http.createServer((req, res) => {
    res.write('hello, world')
    res.end()
  })

  servers.push(server)
}

const server = servers[RUNID]
server.listen(3000)
