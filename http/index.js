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
    },
    '/cache': () => {
      res.setHeader('cache-control', 'max-age=100')
      res.setHeader('age', '90')
      res.end('Cache 100s')
    },
    '/304': () => {
      res.statusCode = 304
      res.end('hello, world')
    },
    // 测试用例：在任意跨域页面打开控制台，手写以下代码发送请求，并观察网络面板
    // await fetch('http://localhost:3000/cors', { method: 'POST', body: JSON.stringify({ a: 3 }), headers: { 'content-type': 'application/json' } })
    // await fetch('http://localhost:3000/cors', { method: 'POST', body: JSON.stringify({ a: 3 }), headers: { 'content-type': 'application/json' }, credentials: 'include' })
    // 
    // 该请求没有指定 METHOD，因此所有方法都能进来
    '/cors': () => {
      // res.setHeader('access-control-allow-origin', '*')
      res.setHeader('access-control-allow-origin', req.headers['origin'])

      res.setHeader('access-control-allow-credentials', true)

      // 专为 OPTIONS 设计，如果没有该响应头，则
      // 注意：可进行注释再次测试
      res.setHeader('access-control-allow-headers', 'content-type')

      // 配置 cookie，测试跨域时是否能携带 cookie 测试
      res.setHeader('set-cookie', 'a=3; SameSite=None')

      // 返回 JSON 格式
      res.end(JSON.stringify({
        cors: true
      }))
    }
  }

  for (const [path, handle] of Object.entries(routes)) {
    if (req.url === path) {
      handle()
    }
  }
})

server.listen(3000, () => { console.log('Listening') })
