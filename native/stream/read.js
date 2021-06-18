const fs = require('fs')
const { pipeline } = require('stream')
const getStream = require('get-stream')

const stream = fs.createReadStream('./example.jsonl', {
  // highWaterMark: 2000
})

stream.on('data', (chunk) => {
  console.log('Chunk: ', chunk)
  console.log('Chunk_String', chunk.toString())
})

stream.on('data', (chunk) => {
  console.log('Chunk: ', chunk)
  console.log('Chunk_String', chunk.toString())
})

getStream(stream).then(o => {
  console.log('GetStream: ', o) 
})

pipeline(
  stream,
  async function* (source) {
    for await (const chunk of source) {
      console.log(chunk.toString())
      yield chunk.toString().toUpperCase()
    }
  },
  async function* (source) {
    for await (const chunk of source) {
      console.log(chunk.toString())
      yield chunk.toString().toUpperCase()
    }
  },
  fs.createWriteStream('example-pipe.jsonl'),
  err => {
    console.log(err)
  }
)