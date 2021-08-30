const http = require('http')

const server = http.createServer(async (req, res) => {
  res.statusCode = 201
  res.end()
  // res.statusCode = 200
})

server.listen(3000)
