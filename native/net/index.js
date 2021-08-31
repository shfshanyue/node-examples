const net = require('net')

// 创建一个 TCP socket
const server = net.createServer((socket) => {
  socket.on('data', data => {
    console.log(data)
  })
  socket.end('echo\r\n')
})

server.listen(8080, () => {
  console.log('Server 8080: ', server.address());
});

setTimeout(() => {
  // net client 实现
  // 为了使 Server 启动完成，在 1s 之后，client 再去试图连接 server
  const client = net.createConnection({
    timeout: 3000,
    port: 8080,
    // allowHalfOpen: true
  }, () => {
    console.log(`Client ${client.localPort}: 该客户端已与服务端取得联系`)
    client.write('hello\r\n')
  })

  client.on('data', (data) => {
    console.log(`Client ${client.localPort} Received: ${data}`)
    client.end()
  })

  client.on('end', () => {
    console.log(`Client ${client.localPort} : 该客户端已下线`)
  })
}, 1000)
