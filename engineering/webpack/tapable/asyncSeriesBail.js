const { AsyncSeriesHook } = require('tapable')

const one = new AsyncSeriesHook([ 'data' ])

one.tapAsync('one', (data, cb) => {
  console.log('1.1', 'ARGS', data)
  // 如果此时回调参数中有值，则直接结束 hook
  cb()
})

one.tapAsync('one', (data, cb) => {
  console.log('1.2', 'ARGS', data)
  return cb(null, { ok: true })
})

one.callAsync({ a: 3, b: 4 }, (err, data) => {
  console.log('DONE', data)
})