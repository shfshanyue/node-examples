const fs = require('fs/promises')

// 在 linux 系统中，一切皆是文件

// 1. 如何判断某个文件为目录还是文件，原理如何
// 2. 如何判断某个文件是否存在

function f1 () {
  fs.stat('.').then(o => {
    console.log(o)

    console.log('MODE', o.mode, o.mode.toString(2), o.mode.toString(8))

    // 判断是否为 socket
    console.log('IS_FILE', o.isFile())
    console.log('IS_DIRECTORY', o.isDirectory())
  })
}

function f2 () {
  fs.readFile('./package.json').then(o => {
    console.log(o.toString())
  })
}

f1()