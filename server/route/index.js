const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url)

  let data = 'hello, shanyue'
  if (req.url.startsWith('/api/users/')) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    
    const id = Number(req.url.replace('/api/users/', ''))
    data = JSON.stringify({ userId: id })
  }
  
  res.end(data)
})

server.listen(3000)

