const { Writable } = require('stream')
const fs = require('fs')

// 1. 什么时候会触发 `drain` 事件
// 2. 什么时候 state.sync 为 true: 当使用了 cork 时为 true
// 3. 如何控制写入流的速率

function f0 () {
  const stream = new Writable({
    write (data, encoding, cb) {
      cb()
    }
  })

  // 当手动调用 .end 时触发事件
  stream.on('finish', () => {
    console.log('FINISH')
  })

  // 当配置了 autoDestroy: true 时，destroy() 在 finish 后自动触发
  // 当配置了 emitClose: true 时， close 在 destroy 后自动触发
  stream.on('close', () => {
    console.log('CLOSE')
    console.log('DESTROYED: ', stream.destroyed)
  })

  stream.write('AAAAAA')
  stream.end()
}


function f1() {
  const stream = fs.createWriteStream('./example-w.jsonl')

  // 当手动调用 .end 时触发
  stream.on('finish', e => console.log('FINISH'))

  // 当 finish 后，进入 close 状态，将会自动触发 destroy()
  // 当 finish 后，进入 close 状态，将会自动触发 destroy()
  // 当 finish 后，进入 close 状态，将会自动触发 destroy()
  stream.on('close', e => {
    console.log('CLOSE')
    console.log('DESTROYED', stream.destroyed)
  })

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

  const stream = new Writable({
    // 手动实现 WriteStream.prototype._write
    // stream._write(chunk, encoding, state.onwrite);
    write (data, encoding, cb) {
      console.log(data.toString());
      // 控制速率, 一定的时间写入一次
      setTimeout(() => {
        cb()
      }, 3000);
    }
  })

  stream.on('finish', e => console.log('FINISH'))
  stream.on('close', e => console.log('CLOSE'))
  stream.on('drain', e => console.log('DRAIN'))

  stream.write('锄禾日当午')
  stream.write('汗滴禾下土')
  stream.write('谁知盘中餐')
  stream.write('粒粒皆辛苦')
  stream.end('悯农')
}

function f4 () {
  const stream = new Writable({
    write (data, encoding, cb) {
      cb()
    }
  })

  function log () {
    console.log()
    console.log('sync:', stream._writableState.sync)
    console.log('buffered', stream._writableState.buffered)
    console.log('needDrain', stream._writableState.needDrain)
  }

  stream.write('A')
  log()
  stream.write('B')
  log()
}

// 示例:
//
function f5 () {
  const stream = new Writable({
    write (data, encoding, cb) {
      cb()
    }
  })

  function log () {
    console.log()
    console.log('sync:', stream._writableState.sync)

    // buffered 为 WritableStream 内部维护的一个链表
    console.log('buffered', stream._writableState.buffered)
    console.log('needDrain', stream._writableState.needDrain)
  }

  stream.cork()
  stream.write('A')
  log()
  stream.write('B')
  log()
  stream.uncork()
}
// 与以上示例的区别仅仅是 cork/highWaterMark
function f7 () {
  const stream = new Writable({
    highWaterMark: 4,
    write (data, encoding, cb) {
      cb()
    }
  })

  // 这里的 drain 事件会被触发几次
  stream.on('drain', () => console.log('DRAIN EVENT'))

  function log () {
    console.log()
    console.log('SYNC:', stream._writableState.sync)
    console.log('BUFFERED', stream._writableState.buffered)
    console.log('NEEDdRAIN', stream._writableState.needDrain)
  }

  stream.write('AAAAAA')
  log()
  stream.write('BBBBBB')
  log()
}

f0()
