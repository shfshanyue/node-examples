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

// 示例三:
// 通过 Buffer.allocUnsafe 也可提前分配空间，不过其中的数据为随机生成
console.log('\n\n示例三:')
{
  const buf = Buffer.allocUnsafe(4)

  console.log(buf, buf.toString())

  buf[0] = 0x41
  buf[1] = 0x41
  buf[2] = 0x41
  buf[3] = 0x41

  console.log(buf, buf.toString())
}

// 示例四:
// 如何正确地把 TypedArray 转化为 Buffer
console.log('\n\n示例四')
{
  const a = new Uint8Array([65, 65, 65, 65])
  const b = new Uint16Array([65, 65, 65, 65])
  const c = new Uint32Array([65, 65, 65, 65])

  console.log(a, a.byteLength, b, b.byteLength, c, c.byteLength)

  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  const bufC = Buffer.from(c)

  console.log(bufA, bufA.byteLength, bufB, bufB.byteLength, bufC, bufC.byteLength)

  const bufAA = Buffer.from(a)
  const bufBB = Buffer.from(b.buffer, b.byteOffset, b.byteLength)
  const bufCC = Buffer.from(c.buffer, c.byteOffset, c.byteLength)

  console.log(bufAA, bufAA.byteLength, bufBB, bufBB.byteLength, bufCC, bufCC.byteLength)
}

