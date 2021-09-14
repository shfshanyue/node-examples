const fs = require('fs/promises')

// 在 linux 系统中，一切皆是文件
// 在 linux 系统中，一切皆是文件
// 在 linux 系统中，一切皆是文件

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