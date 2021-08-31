const fs = require('fs')
const { pipeline } = require('stream')
const sleep = s => new Promise(res => setTimeout(res, s))
const getStream = require('get-stream')

async function main () {
  示例一:
  以流的方式读取文件
  console.log('示例一:')
  {
    const stream = fs.createReadStream('./example.jsonl', {
      // highWaterMark: 2000
    })

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

  await sleep(1000)

  // 示例一:
  // 以流的方式读取文件，分为多个 chunk 进行读
  console.log('\n\n示例二:')
  {
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

  await sleep(1000)
  console.log('\n\n示例三:')
  {
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

  await sleep(1000)

  // 示例四:
  // 以管道的方式对文件进行操作
  console.log('\n\n示例四:')
  {
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

  await sleep(1000)

  // 示例五:
  // 
  console.log('\n\n示例四:')
  {
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
}

main()