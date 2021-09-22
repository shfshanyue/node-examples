const crypto = require('crypto')
const { Buffer } = require('buffer')

// 示例一:
// Keyed-Hashing for Message Authentication。可认为带有 secrect 的 hash 算法，hash+salt 的升级版
// 基于 sha256 的消息认证算法，将生成 256 位的摘要
console.log('示例一:')
{
  const secret = 'secret of shanyue'
  const hash = crypto.createHmac('sha256', secret)
    .update('hello, world')
    .digest('hex')

  // hash.length 64，每个十六进制代表四位，总共 256 位
  console.log(hash, hash.length)
}

// 示例二:
// 哈希算法，通过 createHash 将生成一个可转化流 (transform stream)
console.log('\n\n示例二:')
{
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


// 示例三:
console.log('\n\n示例三:')
{
  // 算法(aes192)+模式(cbc)
  // aes: Advanced Encryption Standard。支持 128、192、256
  // cbc: Cipher-block chaining。串行加密，并行解密
  const algorithm = 'aes-192-cbc'
  const password = 'password of shanyue'

  // 第一步，生成 key
  // 该算法 aes192 将生成 192 bit 的 key，合计 24 个字节，因此第三个参数为 24
  const key = crypto.scryptSync(password, 'salt', 24)
  console.log(key)

  // 第二步，生成一个随机初始化向量 (iv)
  crypto.randomFill(new Uint8Array(16), (err, iv) => {
    if (err) throw err

    // Creates and returns a Cipher object, with the given algorithm, key and initialization vector (iv).
    // 返回的 cipher 是一个 Transform Stream
    const cipher = crypto.createCipheriv(algorithm, key, iv)

    let encrypted = ''
    cipher.setEncoding('hex')

    cipher.on('data', (chunk) => encrypted += chunk);
    cipher.on('end', () => console.log(encrypted))

    cipher.write('hello, world')
    cipher.end()

    cipher.get
  })
}

// 示例四:
{
  const algorithm = 'aes-192-cbc'
  const password = 'password of shanyue'

  // Key length is dependent on the algorithm. In this case for aes192, it is
  // 24 bytes (192 bits).
  // Use the async `crypto.scrypt()` instead.
  const key = scryptSync(password, 'salt', 24)

  // The IV is usually passed along with the ciphertext.
  const iv = Buffer.alloc(16, 0)
  
  const decipher = createDecipheriv(algorithm, key, iv)
  
  let decrypted = ''
  decipher.on('readable', () => {
    while (null !== (chunk = decipher.read())) {
      decrypted += chunk.toString('utf8')
    }
  })
  decipher.on('end', () => {
    console.log(decrypted);
  })
  
  // Encrypted with same algorithm, key and iv.
  const encrypted = 'e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa';
  decipher.write(encrypted, 'hex')
  decipher.end()
}