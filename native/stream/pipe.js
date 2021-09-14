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


// 示例四:
// 以管道的方式对文件进行操作
function f4() {
  pipeline(
    fs.createReadStream('./example.jsonl'),
    async function* (source) {
      for await (const chunk of source) {
        console.log('Demo 4.1', chunk.toString())
        yield chunk.toString().toUpperCase()
      }
    },
    async function* (source) {
      for await (const chunk of source) {
        console.log('Demo 4.2', chunk.toString())
        yield chunk.toString().toUpperCase()
      }
    },
    fs.createWriteStream('example-pipe.jsonl'),
    err => {
      console.log(err)
    }
  )
}

// 示例五:
// 
function f5() {
  pipeline(
    fs.createReadStream('./example.jsonl'),
    async function* (source) {
      for await (const chunk of source) {
        console.log('Demo 4.1', chunk.toString())
        yield chunk.toString().toUpperCase()
      }
    },
    async function* (source) {
      for await (const chunk of source) {
        console.log('Demo 4.2', chunk.toString())
        yield chunk.toString().toUpperCase()
      }
    },
    fs.createWriteStream('example-pipe.jsonl'),
    err => {
      console.log(err)
    }
  )
}


const RUNID = 4
fns[RUNID]()