const net = require('net')

// 创建一个 TCP socket
const server = net.createServer((socket) => {
  socket.end('echo\n')
})

server.listen(8080, () => {
  console.log('opened server on', server.address());
});

setTimeout(() => {
  const client = net.createConnection({
    timeout: 3000,
    port: 8080,
    // allowHalfOpen: true
  }, () => {
    console.log('connected to server!')
    client.write('hello\r\n')
  })

  client.on('data', (data) => {
    console.log(data.toString())
    client.end()
  })

  client.on('end', () => {
    console.log('disconnected from server')
  })
}, 3000)
