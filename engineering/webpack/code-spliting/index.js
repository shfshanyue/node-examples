// 取消以下注释，在 build.js 中，使用 f1 函数继续构建打包
//
// import _ from 'lodash'
// console.log(_.get)

import('./sum').then(m => {
  console.log(m.default(3, 4))
})

// 第二次 import() 时不会再次加载 chunk
import('./sum').then(m => {
  console.log(m.default(3, 4))
})