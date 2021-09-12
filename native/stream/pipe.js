const { pipeline, Readable } = require('stream')
const fs = require('fs')
const zlib = require('zlib')

const fns = [0]
let f

// 示例一:
// 一个关于 pipeline 的经典示例
f = () => {
  const a = fs.createReadStream('./package-lock.json')
  const b = zlib.createGzip()
  const c = fs.createWriteStream('package-lock.gz')
  pipeline(
    a,
    b,
    c,
    () => {
      console.log('OK')
    }
  )
}
fns.push(f)

// 示例二:
// 当 pipeline 结束后，stream 会自动 destroy 掉
// 查看 Readable 的三个状态: readable、readableEnded、destroyed
f = () => {
  const stream = Readable.from('hello, world')
  pipeline(
    stream,
    fs.createWriteStream('hello.temp'),
    () => {
      console.log('OK')
      console.log('Readable', stream.readable, 'ReadableEnded', stream.readableEnded, 'Destroyed', stream.destroyed)
    }
  )

  console.log('Readable', stream.readable, 'ReadableEnded', stream.readableEnded, 'Destroyed', stream.destroyed)
}
fns.push(f)


// 示例三:
// destroy() 会触发 close 事件
f = () => {
  const stream = Readable.from('hello, world')

  stream.on('close', () => {
    console.log('CLOSE')
  })

  // destory 将触发 close/error 事件，如果参数为 Error 则触发 error 事件
  stream.destroy()
}
fns.push(f)

// 示例四:
// destroy() 会触发 error/close 事件
f = () => {
  console.log('示例四')
  const stream = Readable.from('hello, world')

  stream.on('close', () => {
    console.log('CLOSE')
  })

  stream.on('error', (err) => {
    console.log('ERROR')
  })

  // destory 将触发 error/close 事件，如果参数为 Error 则触发 error/close 事件
  stream.destroy(new Error('err'))
}
fns.push(f)

// 示例五:
// 当接收到 end 时间后，
// End 是如何触发的？
f = () => {
  const stream = Readable.from('hello, world')
  stream.on('end', () => {
    console.log('END')

    // END 之后无法读取数据
    stream.on('data', (d) => { console.log(d) })
  })

  stream.on('data', (d) => { console.log(d) })
  stream.on('data', (d) => { console.log(d) })
}
fns.push(f)

const RUNID = 4
fns[RUNID]()