// 1. 在以下示例中，arr 为 Uint8Array 实例，buf 为 Buffer 示例

// 示例一: Uint8Array 与 Buffer
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

// 示例二: Buffer 与 Uint8Array 如何创建 10 个全是 A 的 buffer
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

// 示例三: Buffer.allocUnsafe
// 通过 Buffer.allocUnsafe 也可提前分配空间，不过其中的数据为随机生成
console.log('\n\n示例三:')
{
  // 采用内部的缓存分配池子分配数据，而不申请内存
  const buf = Buffer.allocUnsafe(4)

  console.log(buf, buf.toString())

  buf[0] = 0x41
  buf[1] = 0x41
  buf[2] = 0x41
  buf[3] = 0x41

  console.log(buf, buf.toString())
}

// 示例四: 如何正确地把 TypedArray 转化为 Buffer
function f4() {
  const a = new Uint8Array([65, 65, 65, 65])
  const b = new Uint16Array([65, 65, 65, 65])
  const c = new Uint32Array([65, 65, 65, 65])

  console.log(a, a.byteLength, b, b.byteLength, c, c.byteLength)

  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  const bufC = Buffer.from(c)

  console.log(bufA, bufA.byteLength, bufB, bufB.byteLength, bufC, bufC.byteLength)

  // 使用 Buffer.from(buffer, buffer.byteOffset, buffer.byteLength) 才能正确地将 TypedArray 转化为 Buffer
  const bufAA = Buffer.from(a)
  const bufBB = Buffer.from(b.buffer)
  // const bufCC = Buffer.from(c.buffer, c.byteOffset, c.byteLength)
  const bufCC = Buffer.from(c.buffer)

  console.log(bufAA, bufAA.byteLength, bufBB, bufBB.byteLength, bufCC, bufCC.byteLength)
}

// 示例: Uint8Array To Buffer
function f5 () {
  const arr = new Uint8Array(10).fill('A'.charCodeAt())

  // Uint8Array -> Buffer
  const buf = Buffer.from(arr)

  console.log(buf)
}

// 示例: Buffer To Uint8Array
function f6 () {
  const buf = Buffer.alloc(10, 'A')

  const arr = new Uint8Array(buf.buffer)

  console.log(arr)
}

// 示例: 如何判断一个 buffer 包含另一个 buffer
// 在 buffer 中较为简单，在 Uint8Array 中较为复杂
function f7() {
  console.log(Buffer.from('hello').includes(Buffer.from('he')))

  console.log(
    new Uint8Array([96, 97, 98, 99, 100]).includes(new Uint8Array([97]))
  )
}

f7()
