const webpack = require('webpack')
const path = require('path')
const { stdout } = require('process')

//
// # 更好地查看日志
// $ node build2.js  | jq -c -C ".[]" | less

// webpack 的运行时代码分析
function f1 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    infrastructureLogging: {
      debug: true,
      stream: stdout
    }
  })
}

// output.path 如何指定打包目录为 build 目录
f1().run((err, stat) => {
  const logs = Array.from(stat.compilation.logging, ([hook, logs]) => {
    return logs.map(r => {
      return {
        readableTime: new Date(r.time).toJSON(),
        api: hook,
        ...r,
      }
    })
  }).flat()
  console.log(JSON.stringify(logs))
})
