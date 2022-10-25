function sum(...args: number[]) {
  return args.reduce((x, y) => x + y, 0)
}

console.log(sum(1, 2, 3, 4, 5))
