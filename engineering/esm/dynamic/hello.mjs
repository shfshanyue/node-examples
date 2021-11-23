let sum = 0
Promise.resolve().then(() => {
  sum = 100
})
export { sum }
export default { sum }