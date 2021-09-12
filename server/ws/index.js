const { WebSocketServer, WebSocket } = require('ws')

const wss = new WebSocketServer({ port: 8080 })

wss.on('connection', (ws) => {
  console.log('Server Connection')

  ws.on('message', (message) => {
    console.log('Server Message:', message)

    ws.send('hello')
  })

  ws.send('something')
})

// 1s 之后客户端用来连接服务端
setTimeout(() => {
  const ws = new WebSocket('ws://localhost:8080');

  ws.on('open', () => {
    console.log('Client Open:')
    ws.send('hello, world')
  })

  ws.on('message', (message) => {
    console.log('Client Message:', message)
    ws.send('hello')
  })
}, 1000)