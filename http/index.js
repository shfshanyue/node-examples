const http = require('http')

const server = http.createServer((req, res) => {

  // 其实这个对象完全可以放在外边，放在这里边纯粹是因为方便类型自动补全
  const routes = {
    '/': () => {
      res.end('hello, world')
    },
    '/301': () => {
      res.statusCode = 301
      res.setHeader('location', '/')
      res.end('301')
    },
    '/302': () => {
      res.statusCode = 302
      res.setHeader('location', '/')
      res.end('302')
    },
    // 如果返回错误的 Content-Length，会如何？
    '/correct-length': () => {
      res.setHeader('content-length', 5)
      res.end('0123456789')
    },
    '/miss-length': () => {
      // node 会自动计算一个 content-length，如果需要去除 content-length，则使用 res.removeHeader
      // 当 node.js 去除了该 header 时，它将使用 transfer-encoding 的方式进行数据传输
      res.removeHeader('content-length')
      res.end('0123456789')
    },
    '/attachment': () => {
      res.setHeader('content-disposition', 'attachment; filename=hello.txt')
      res.end('hello, world')
    },
    '/headers': () => {
      const headers = req.headers
      res.end(JSON.stringify(headers, null, 2))
    },
    '/rawHeaders': () => {
      const headers = req.rawHeaders
      res.end(JSON.stringify(headers, null, 2))
    }
  }

  for (const [path, handle] of Object.entries(routes)) {
    if (req.url === path) {
      handle()
    }
  }
})

server.listen(3000, () => { console.log('Listening') })
