// 示例一: 
// ES6+ 中的二进制: Uint8Array 与 Buffer。Buffer 继承自 Uint8Array
// 如果想了解 Buffer, 可对 ES6+ 中新增的数据类型 TypedArray 与 ArrayBuffer 进行了解
console.log('示例一:')
{
  const arr = new Uint8Array([65, 97])
  const buf = Buffer.from(arr)
  console.log(arr.byteLength, buf.byteLength)

  //=> 65, 97
  console.log(arr.toString())

  // hello, world
  console.log(buf.toString())
}

// 示例二:
// 通过 Buffer.alloc 可提前分配空间
console.log('\n\n示例二:')
{
  // 构建成 10 个 A 组成的Buffer，如果 A 不提供，则以 0 填充
  const buf = Buffer.alloc(10, 'A')
  const arr = new Uint8Array(10).fill('A'.charCodeAt())

  console.log(buf, arr)

  //=> hello, world
  console.log(buf.toString())
  console.log(Buffer.from(arr).toString())
}

