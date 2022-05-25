const crypto = require('crypto')
const { Buffer } = require('buffer')

let f, run

const f0 = () => {
  let hash, x

  // md5 生成 128 为散列值
  const a = crypto.createHash('md5').update('hello, world').digest('hex')
  console.log(a, a.length)

  // 使用 Buffer 将与 string 一样，生成一致的 hash
  const b = crypto.createHash('md5').update(Buffer.from('hello, world')).digest('hex')
  console.log(b, b.length)

  // 多次使用 update 与 一次update 一样，都会生成一致的 hash
  hash = crypto.createHash('md5')
  hash.update('hello, ')
  hash.update('world')

  const c = hash.digest('hex')
  console.log(c, c.length)

  // Uint8Array、Buffer、String 都将生成一致的 hash
  const d = crypto.createHash('md5').update(new Uint8Array(Array.from('hello, world', x => x.charCodeAt()))).digest('hex')
  console.log(d, d.length)

  // Uint16Array 中字节数翻倍，将不会生成一致的 hash
  const e = crypto.createHash('md5').update(new Uint16Array(Array.from('hello, world', x => x.charCodeAt()))).digest('hex')
  console.log(e, e.length)

  hash = crypto.createHash('md5')
  hash.update(Buffer.from('hello, ')) 
  hash.update(Buffer.from('world')) 
  x = hash.digest('hex')
  console.log(x, x.length)
}

run = f

// 示例一:
// Keyed-Hashing for Message Authentication。可认为带有 secrect 的 hash 算法，hash+salt 的升级版
// 基于 sha256 的消息认证算法，将生成 256 位的摘要
const f1 = () => {
  console.log('示例一:')
  const secret = 'secret of shanyue'
  const hash = crypto.createHmac('sha256', secret)
    .update('hello, world')
    .digest('hex')

  // hash.length 64，每个十六进制代表四位，总共 256 位
  console.log(hash, hash.length)
}


// 示例二:
// 哈希算法，通过 createHash 将生成一个可转化流 (transform stream)
const f2 = () => {
  console.log('\n\n示例二:')
  const hash = crypto.createHash('sha256')

  // hash 将作为一个 Transform Stream
  hash.on('readable', () => {
    const data = hash.read()
    if (data) {
      //=》 09ca7e4eaa6e8ae9c7d261167129184883644d07dfba7cbfbc4c8a2e08360d5b
      console.log(data.toString('hex'))
    }
  })

  hash.on('data', data => {
    //=》 09ca7e4eaa6e8ae9c7d261167129184883644d07dfba7cbfbc4c8a2e08360d5b
    console.log(data.toString('hex'))
  })

  hash.write('hello, world')
  hash.end()

  //=》 sha256 摘要算法，将生成 256 位的摘要
  //=》 09ca7e4eaa6e8ae9c7d261167129184883644d07dfba7cbfbc4c8a2e08360d5b
  console.log(hash.update('hello, world').digest('hex'))
}


// 示例三: aes-192-cbc 编码，不同的 iv
const f3 = () => {
  console.log('\n\n示例三:')

  // 算法(aes192)+模式(cbc)
  // aes: Advanced Encryption Standard。支持 128、192、256
  // cbc: Cipher-block chaining。串行加密，并行解密
  const algorithm = 'aes-192-cbc'
  const password = 'password of shanyue'

  // 第一步，生成 key
  // 该算法 aes192 将生成 192 bit 的 key，合计 24 个字节，因此第三个参数为 24
  const key = crypto.scryptSync(password, 'salt', 24)
  // <Buffer 15 05 a8 cb af 0d 83 c1 0b e8 67 3a 3b d3 40 bc 58 7d 70 4a d2 a8 ed 75>
  console.log(key)

  // 第二步，生成一个随机初始化向量 (iv, initialization vector)
  // 为什么 iv 必须是 16 位
  crypto.randomFill(new Uint8Array(16), (err, iv) => {
    if (err) throw err

    // Creates and returns a Cipher object, with the given algorithm, key and initialization vector (iv).
    // 返回的 cipher 是一个 Transform Stream
    const cipher = crypto.createCipheriv(algorithm, key, iv)

    cipher.update('hello, world')
    const r = cipher.final('hex')
    // 不同的 iv 导致每次的输出结果都不同
    // => b0c573a5b7f7762945f936c641c5f053
    console.log(r)

    // let encrypted = ''
    // cipher.setEncoding('hex')

    // cipher.on('data', (chunk) => encrypted += chunk);
    // cipher.on('end', () => console.log(encrypted))

    // cipher.write('hello, world')
    // cipher.end()
  })
}

// 示例三: aes-192-cbc 编码，相同的 iv
const f4 = () => {
 // 算法(aes192)+模式(cbc)
  // aes: Advanced Encryption Standard。支持 128、192、256
  // cbc: Cipher-block chaining。串行加密，并行解密
  const algorithm = 'aes-192-cbc'
  const password = 'password of shanyue'

  // 第一步，生成 key
  // 该算法 aes192 将生成 192 bit 的 key，合计 24 个字节，因此第三个参数为 24
  const key = crypto.scryptSync(password, 'salt', 24)
  // <Buffer 15 05 a8 cb af 0d 83 c1 0b e8 67 3a 3b d3 40 bc 58 7d 70 4a d2 a8 ed 75>
  console.log(key)

  // 第二步，生成一个随机初始化向量 (iv, initialization vector)
  // 为什么 iv 必须是 16 位
  const iv = Buffer.alloc(16, 0)

  // Creates and returns a Cipher object, with the given algorithm, key and initialization vector (iv).
  // 返回的 cipher 是一个 Transform Stream
  const cipher = crypto.createCipheriv(algorithm, key, iv)

  cipher.update('hello, world')
  const r = cipher.final('hex')
  // 相同的 iv，相同的输出结果
  // => 7cdf899c34afad30a4a2b77b5e501657
  console.log(r)
}

// 示例四: aes-192-cbc 解码
const f5 = () => {
  const algorithm = 'aes-192-cbc'
  const password = 'password of shanyue'

  // Key length is dependent on the algorithm. In this case for aes192, it is
  // 24 bytes (192 bits).
  // Use the async `crypto.scrypt()` instead.
  const key = crypto.scryptSync(password, 'salt', 24)

  // The IV is usually passed along with the ciphertext.
  const iv = Buffer.alloc(16, 0)

  const decipher = crypto.createDecipheriv(algorithm, key, iv)

  decipher.update('7cdf899c34afad30a4a2b77b5e501657', 'hex')

  const r = decipher.final('utf8')

  console.log(r)

  // let decrypted = ''
  // decipher.on('readable', () => {
  //   while (null !== (chunk = decipher.read())) {
  //     decrypted += chunk.toString('utf8')
  //   }
  // })
  // decipher.on('end', () => {
  //   console.log(decrypted);
  // })

  // // Encrypted with same algorithm, key and iv.
  // const encrypted = 'e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa';
  // decipher.write(encrypted, 'hex')
  // decipher.end()
}

const f6 = () => {
  const algorithm = 'des'
  const password = 'password of shanyue'

  // Key length is dependent on the algorithm. In this case for aes192, it is
  // 24 bytes (192 bits).
  // Use the async `crypto.scrypt()` instead.
  const key = crypto.scryptSync(password, 'salt', 24)

  // The IV is usually passed along with the ciphertext.
  const iv = Buffer.alloc(12, 0)

  const cipher = crypto.createCipheriv(algorithm, key, iv)

  cipher.update('hello, world')

  const r = cipher.final('base64')

  console.log(r)

  // let decrypted = ''
  // decipher.on('readable', () => {
  //   while (null !== (chunk = decipher.read())) {
  //     decrypted += chunk.toString('utf8')
  //   }
  // })
  // decipher.on('end', () => {
  //   console.log(decrypted);
  // })

  // // Encrypted with same algorithm, key and iv.
  // const encrypted = 'e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa';
  // decipher.write(encrypted, 'hex')
  // decipher.end()
}

f = () => {
  const b = Buffer.concat([Buffer.from('hello, '), Buffer.from('world')])
  console.log(b, b.toString())
}


f6()