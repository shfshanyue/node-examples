const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url)

  let data = ''
  if (req.url === '/') {
    data = 'hello, world'
    res.end(data)
  } else if (req.url === '/json') {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    data = JSON.stringify({ username: '山月' })
    res.end(data)
  } else if (req.url === '/input') {
    let body = ''
    req.on('data', chunk => body += chunk)
    req.on('end', () => {
      data = body
      res.end(data)
    })
  }
})

server.listen(3000)
