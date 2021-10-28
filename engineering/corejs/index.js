const any = require('core-js/stable/promise/any')

any([1, 2, 3]).then(o => console.log(o))
Promise.any([1, 2, 3]).then(o => console.log(o))
