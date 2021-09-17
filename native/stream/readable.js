const fs = require('fs')
const { Readable } = require('stream')
const getStream = require('get-stream')

// 1. 如何自定义一个 Readable
// 1. end 事件是如何触发的？
// 1. 什么时候 state.flowing 状态为 true
// 1. 什么时候 state.buffered 缓存多余的状态

let run, f;

// 示例一:
// 以流的方式读取文件
function f1() {
  console.log('示例一:')
  const stream = fs.createReadStream('./example.jsonl', {
    // highWaterMark: 2000
  })

  // 同一个 stream 可以读取多次，监听多次 data 事件
  stream.on('data', (chunk) => {
    console.log('Demo 1.1 Chunk: ', chunk)
    console.log('Demo 1.1 Chunk_String', chunk.toString())
  })

  stream.on('data', (chunk) => {
    console.log('Demo 1.2 Chunk: ', chunk)
    console.log('Demo 1.2 Chunk_String', chunk.toString())
  })

  getStream(stream).then(o => {
    console.log('Demo 1.3 GetStream: ', o)
  })
}


// 示例二:
// 以流的方式读取文件，可根据 `highWaterMark` 分为多个 chunk 进行读取
function f2() {
  console.log('示例二:')
  let data = ''

  const stream = fs.createReadStream('./example.jsonl', {
    highWaterMark: 10
  })

  stream.on('data', (chunk) => {
    console.log('Demo 2.1 Chunk: ', chunk)
    console.log('Demo 3.1 Chunk_String', chunk.toString())
    data += chunk
  })

  stream.on('end', () => {
    console.log(data)
  })
}

function f3() {
  const stream = fs.createReadStream('./example.jsonl', { highWaterMark: 10 })

  stream.on('readable', o => {
    const data = stream.read()
    console.log('Readable Event')
    console.log('stream.readable', stream.readable)
    console.log('stream.readableFlowing', stream.readableFlowing)
    console.log('stream.needReadable', stream.needReadable)
    if (data) {
      console.log(data.toString())
    }
  })
  console.log('stream.readable', stream.readable)
  console.log('stream.readableLength', stream.readableLength)
}

// 示例三:
// destroy() 会触发 close 事件
function f4() {
  const stream = Readable.from('hello, world')

  stream.on('close', () => {
    console.log('CLOSE')
  })

  // destory 将触发 close/error 事件，如果参数为 Error 则触发 error 事件
  stream.destroy()
}

// 示例四:
// destroy() 会触发 error/close 事件
function f5() {
  console.log('示例四')
  const stream = Readable.from('hello, world')

  stream.on('close', () => {
    console.log('CLOSE')
  })

  stream.on('error', (err) => {
    console.log('ERROR')
  })

  stream.on('end', () => {
    console.log('END')
  })

  // destory 将触发 error/close 事件，如果参数为 Error 则触发 error/close 事件
  stream.destroy(new Error('err'))
}

// 示例:
// 当接收到 end 时间后，
// End 是如何触发的？
// End 是如何触发的？
// End 是如何触发的？
function f6() {
  const stream = Readable.from('hello, world')

  // 数据读取之后会触发 end 事件
  stream.on('end', () => {
    console.log('END')

    // END 之后无法读取数据
    stream.on('data', (d) => { console.log(d) })
  })

  stream.on('data', (d) => {
    console.log(d)
  })
  stream.on('data', (d) => {
    console.log(d)
  })
}


// 示例:
// ReadableStream 可通过 pause/resume 控制读取的速率
function f7() {
  const stream = Readable.from(Array.from('hello, world.'), {
    highWaterMark: 1
  })

  // 每次读取两个数据
  stream.on('data', chunk => {
    console.log(chunk.toString())
    stream.pause()
    console.log('3s 后继续读取流数据')
    setTimeout(() => {
      stream.resume()
    }, 3000)
  })
}

// 示例:
// 通过重写 _read 或者 options.read 可自定义 ReadableStream
function f8 () {
  const stream = new Readable({
    highWaterMark: 3,
    read () {
      console.log(this.push('A'))
      console.log(this.push('BB'))
      console.log(this.push('CCC'))
      console.log(this.push('DDDD'))
      console.log(this.push('EEEEE'))

      // null 意味着结束
      // 如果注释掉以下行，则会不断 push 进数据
      this.push(null)
    }
  })

  stream.on('data', (chunk) => {
    console.log(chunk.toString())
  })
}

// on data -> flowing !== null -> resume -> read(0) -> _read(n) -> readable.push -> flow -> endReadStream -> 'end'
// 如果监听了 data 事件，flowing !== null 时(初始状态)，则自动 resume()，resume 结束后没有数据时触发 end
f = () => {
  const stream = Readable.from(['A', 'B'])

  stream.on('end', () => {
    console.log('END')
  })

  stream.on('data', (chunk) => {
    console.log(chunk)
  })
}

f()