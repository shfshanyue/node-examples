import('./sum').then(m => {
  console.log(m.default(3, 4))
})

// 第二次 import() 时不会再次加载 chunk
import('./sum').then(m => {
  console.log(m.default(3, 4))
})