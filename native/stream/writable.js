const fs = require('fs')

async function main () {
  console.log('示例一:')
  {
    const stream = fs.createWriteStream('./example-w.jsonl')

    stream.on('finish', e => console.log('FINISH'))
    stream.on('close', e => console.log('CLOSE'))
    stream.on('drain', e => console.log('DRAIN'))

    console.log(stream.write('{"name": "shanyue"}\n', 'utf8', () => console.log('FLUSH...')))
    console.log(stream.write('{"name": "shanyue"}\n'))
    console.log(stream.write('{"name": "shanyue"}\n'))
    console.log(stream.write('{"name": "shanyue"}\n'))
    console.log(stream.write('{"name": "shanyue"}\n'))
    stream.end()
  }

  await sleep(1000)

  // 示例二:
  console.log('\n\n示例二:')
  {
    const stream = fs.createWriteStream('./example-w.jsonl', { highWaterMark: 10 })

    stream.on('finish', e => console.log('FINISH'))
    stream.on('close', e => console.log('CLOSE'))
    stream.on('drain', e => console.log('DRAIN'))

    console.log(stream.write('{"name": "shanyue"}\n', 'utf8', () => console.log('FLUSH...')))
    console.log(stream.write('{"name": "shanyue"}\n'))
    console.log(stream.write('{"name": "shanyue"}\n'))
    console.log(stream.write('{"name": "shanyue"}\n'))
    console.log(stream.write('{"name": "shanyue"}\n'))
    stream.end()
  }

  await sleep(1000)

  console.log('示例三')
  {
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
}

main()
