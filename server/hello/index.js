const http = require('http')
const fs = require('fs')
const sleep = (seconds) => new Promise(resolve => setTimeout(resolve, seconds))

// 示例一: hello, world
const f1 = (req, res) => {
  // res.end 表示所有的 header 以及 body 发送完毕，Server 将标记该 Message 为 complete
  res.end('hello, world')
}

// 示例二: Transfer-Encoding
// 当调用了 res.write 及 res.end 时，报文将以 Transfer-Encoding: chunked 返回，与示例一不同
const f2 = (req, res) => {
  res.write('hello, world')
  res.end()
}

// 示例三: stream 一会被视为 chunked
const f3 = (req, res) => {
  fs.createReadStream('../../package.json', {
    // highWaterMark: 16
  }).pipe(res)
}

// 示例四: 
// 当调用了 res.write 及 res.end 时，报文将以 Transfer-Encoding: chunked 返回，与示例一不同
// 当使用流的方式，前端也可以根据流的方式来进行读取: <https://developer.mozilla.org/zh-CN/docs/Web/API/ReadableStream>
const f4 = async (req, res) => {
  await sleep(3000)
  res.write('hello, ')
  await sleep(3000)
  res.write('world')
  res.end()
}

// 示例五:
const f5 = async (req, res) => {
  res.setTimeout(3000)
  res.on('timeout', () => {
    res.end('Timeout')
  })
  await sleep(5000)
}

// 示例六:
// 可以
const f6 = async (req, res) => {
  res.setHeader('X-CUSTOM-HEADER', 'shanyue')
  res.getHeader('X-CUSTOM-HEADER')
  res.getHeader('x-custom-header')
  res.getHeaders()
  res.getHeaderNames()
  res.end(JSON.stringify(res.getHeaders()))
}

const server = http.createServer(f2)
server.listen(3200)
