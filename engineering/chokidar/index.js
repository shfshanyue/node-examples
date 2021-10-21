const chokidar = require('chokidar')

// 1. chokidar 解决了 fs.watch 什么问题
// 2. chokidar 内部是如何实现的

chokidar.watch('.', {
  interval: 300
}).on('all', (event, path) => {
  console.log(event, path)
})
