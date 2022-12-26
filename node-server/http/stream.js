const http = require('http')

const sleep = (seconds) => new Promise(resolve => setTimeout(resolve, seconds))

// Transfer-Encoding: chunked 是在何时进行配置的
const server = http.createServer(async (req, res) => {

  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>测试页面</title>
    </head>
    <body>`
  )
  await sleep(3000)
  res.write('<h1>hello, shanyue</h1>')
  await sleep(3000)
  res.write('<div>这里是大段文字，将会延迟三秒才会正常渲染</div>')
  await sleep(3000)
  res.write('<div>这里又是大段文字，将会延迟三秒才会正常渲染</div>')
  res.end(`
    </body>
    </html>
  `)
})

server.listen(3000)
