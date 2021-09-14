const fs = require('fs')

function f1() {
  console.log('示例一:')
  const stream = fs.createWriteStream('./example-w.jsonl')

  // 当手动调用 .end 时触发
  stream.on('finish', e => console.log('FINISH'))

  // 当 finish 后，进入 close 状态
  stream.on('close', e => console.log('CLOSE'))
  stream.on('drain', e => console.log('DRAIN'))

  // WritableStream 没有 end 事件，只有 ReadableStream 才有
  // WritableStream 没有 end 事件，只有 ReadableStream 才有
  // WritableStream 没有 end 事件，只有 ReadableStream 才有
  stream.on('end', e => console.log('END'))

  // 当写入数据成功时，将会调用 callback (第三个参数)
  console.log(stream.write('{"name": "shanyue"}\n', 'utf8', () => console.log('FLUSH A')))
  console.log(stream.write('{"name": "shanyue"}\n', 'utf8', () => console.log('FLUSH B')))
  console.log(stream.write('{"name": "shanyue"}\n'))
  console.log(stream.write('{"name": "shanyue"}\n'))
  console.log(stream.write('{"name": "shanyue"}\n'))
  stream.end()
}


function f2() {

  const stream = fs.createWriteStream('./example-w.jsonl', { highWaterMark: 18 })

  stream.on('finish', e => console.log('FINISH'))
  stream.on('close', e => console.log('CLOSE'))
  stream.on('drain', e => console.log('DRAIN'))

  console.log(stream.write('A'.repeat(10) + '\n', 'utf8', () => console.log('FLUSH 1...')))
  console.log(stream.write('A'.repeat(20) + '\n', 'utf8', () => console.log('FLUSH 2...')))
  console.log(stream.write('A'.repeat(20) + '\n', 'utf8', () => console.log('FLUSH 3...')))
  console.log(stream.write('A'.repeat(20) + '\n', 'utf8', () => console.log('FLUSH 4...')))
  console.log(stream.write('A'.repeat(20) + '\n', 'utf8', () => console.log('FLUSH 5...')))
  stream.end()
}

function f3() {
  console.log('示例三')
  const Stream = require('stream');

  const stream = new Stream.Writable();

  // WriteStream.prototype._write 需要手动实现
  stream._write = function (data, encoding, cb) {
    console.log(data.toString());
    // 控制速率, 一定的时间写入一次
    setTimeout(() => {
      cb()
    }, 1000);
  }

  stream.on('finish', e => console.log('FINISH'))
  stream.on('close', e => console.log('CLOSE'))
  stream.on('drain', e => console.log('DRAIN'))

  stream.write('锄禾日当午')
  stream.write('汗滴禾下土')
  stream.write('谁知盘中餐')
  stream.write('粒粒皆辛苦')
  stream.end('悯农')
}

f2()