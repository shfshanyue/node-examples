// 示例一: Return Value
{
  const expansiveCompute = (a, b) => a + b

  function sum(a, b) {
    // 在调试中如何得到 7 这个结果
    return expansiveCompute(a, b)
  }

  sum(3, 4)
}

// 示例二: Step Over
{
  const sum = (a, b) => a + b

  // 当在改行设有断点时，Step Over 的下一步是跳过一行还是表达式？
  const l = [1, 2, 3, 4, 5].map(x => sum(x, 1)).filter(x => x > 3)

  // 此行同理
  const n = sum(sum(3, 4), 1)
}

// 示例三: Step Into
{
  const sub = (x, y) => x - y

  // 如何进入到 `.filter` 函数中进行调试
  const l = [1, 2, 3, 4, 5].map(x => sum(x, 1)).filter(x => x > 3)

  // 如何进入到 sub 函数中进行调试
  const n = sub(sum(2, sum(3, 4)), 1)
}

// 示例四: 条件断点
{
  // 如何在 map 函数中，当 x === 3 时打断点
  const l = [1, 2, 3, 4, 5].map(x => sum(x, 1))
}

// 示例五: Promise
{
  Promise.resolve(3).then(o => {
    // 如何 StepOver/StepInto 到当前行进行调试
    console.log(o)
  })
  
  console.log('hello, world')
}

// 示例六: Promise
{
  async function main() {
    const sleep = (seconds) => {
      // 从 await sleep(2000) 如何调试到这里边
      console.log('DEBUG TO HERE')
      return new Promise(resolve => setTimeout(resolve, seconds))
    }
    
    await sleep(2000)
  }

  main()
}

// 示例七: async/await
{
  function sum (a, b) {
    return a + b
  }

  async function asyncSum (a, b) {
    return a + b
  }

  async function main () {
    // 以下两行断点调试有何不同
    const r1 = await sum(3, 4)
    const r2 = await asyncSum(3, 4)
  }

  main()
}

// 示例八: 如何快速发现有问题的代码
{
  const obj = null

  // 这里有问题，如何才能够捕捉到
  console.log(obj.a)
}