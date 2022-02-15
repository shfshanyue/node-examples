export function sum(...args) {
  return args.reduce((x, y) => x + y, 0)
}