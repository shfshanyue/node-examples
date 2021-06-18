const fs = require('fs')

// interface StreamOptions {
//   flags?: string;
//   encoding?: BufferEncoding;
//   fd?: number | promises.FileHandle;
//   mode?: number;
//   autoClose?: boolean;
//   emitClose?: boolean;
//   start?: number;
//   highWaterMark?: number;
// }

const stream = fs.createWriteStream('./example.jsonl', {
  highWaterMark: 3
})

stream.on('finish', e => console.log('FINISH'))

console.log(stream.write('{"name": "shanyue"}\n', 'utf8'), () => console.log('FLUSH...'))
console.log(stream.write('{"name": "shanyue"}\n'))
console.log(stream.write('{"name": "shanyue"}\n'))
console.log(stream.write('{"name": "shanyue"}\n'))
console.log(stream.write('{"name": "shanyue"}\n'))
stream.end()

console.log(stream)
