const browserslist = require('browserslist')

// browserslist 是现代前端工程化中必不可少的工具之一。在 CSS 与 JS 中均有应用，如下
//
// 1. @babel/preset-env
// 2. autoprefixer

function f1 () {
  // 可在此处打断点
  // 实际上，browserlist 通过正则及部分解析该查询语句来查询到所有浏览器
  // 真正的查询函数是内部的 `resolve`，然而 browserslist 并未把它暴露出来
  const browsers = browserslist('Chrome > 90')

  console.log(browsers)

  // browserslist 所有数据均来自与 caniuse-lite，这也是为何它经常提醒你需要更新 caniuse-lite 的原因
  console.log(browserslist.data)
}
