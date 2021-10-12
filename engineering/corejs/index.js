const flat = require('core-js/features/array/flat')

const l = flat([1, [2, [ 3, [ 4]]]], 5)

console.log(l)

