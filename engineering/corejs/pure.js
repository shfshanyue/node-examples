const any = require('core-js-pure/stable/promise/any')

// `core-js-pure` 只能通过赋值变量进行引入 pylyfill，因此不会污染全局变量
//
// 1. 仅仅是 polyfill 的体积也很大，因此引入 polyfill 时需要特别注意
//

any([1, 2, 3]).then(o => console.log(o))
Promise.any([1, 2, 3]).then(o => console.log(o))
