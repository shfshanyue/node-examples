import sha256 from 'crypto-js/sha256.js';
// import hmacSHA512 from 'crypto-js/hmac-sha512';
// import Base64 from 'crypto-js/enc-base64';

const hashDigest = sha256('hello, world');

console.log(hashDigest)
console.log(hashDigest.toString())
