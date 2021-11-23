exports.sum = 0
Promise.resolve().then(() => {
  exports.sum = 100
})