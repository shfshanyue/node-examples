const add = require('./add')

module.exports = (...args) => args.reduce(add, 0)