import {
  generateKeyPairSync,
  createSign,
  createVerify
} from 'node:crypto'

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 512,
  publicKeyEncoding: {
    type: 'pkcs1',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs1',
    format: 'pem'
  }
})

console.log(privateKey, publicKey)

// const sign = createSign('SHA256');
// sign.write('some data to sign');
// sign.end();
// const signature = sign.sign(privateKey, 'hex');

// const verify = createVerify('SHA256');
// verify.write('some data to sign');
// verify.end();
// console.log(verify.verify(publicKey, signature, 'hex'));