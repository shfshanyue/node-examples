const { pipeline } = require('stream')
const zlib = require('zlib')

const gzip = zlib.createGzip({
  level: 3
})

pipeline(
  'hello, world',
  gzip,
  process.stdout,
  err => {
    console.log(err)
  }
)