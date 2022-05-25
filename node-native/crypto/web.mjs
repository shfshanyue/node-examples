import sha256 from 'crypto-js/sha256.js'
import CryptoJS from 'crypto-js';
// import hmacSHA512 from 'crypto-js/hmac-sha512';
// import Base64 from 'crypto-js/enc-base64';

function f1() {
  const hashDigest = sha256('hello, world');

  console.log(hashDigest)
  console.log(hashDigest.toString())
}

function f2() {
  const en = CryptoJS.DES.encrypt('hello, world', '')
  console.log(en.toString())
}

function f3() {
  const en = CryptoJS.AES.encrypt('hello, world', '')
  console.log(en.toString())
}

f2()
