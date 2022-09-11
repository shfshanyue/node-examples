import http from 'http'

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
      res.setHeader('content-length', 10)
      res.end('天地玄黄，宇宙洪荒。日月盈昃，辰宿列张。')
    },
    '/attachment': () => {
      res.setHeader('content-disposition', 'attachment; filename=hello.txt')
      res.end('hello, world')
    },
  }

  for (const [path, handle] of Object.entries(routes)) {
    if (req.url === path) {
      handle()
    }
  }
})

server.listen(3000, () => { console.log('Listening') })
