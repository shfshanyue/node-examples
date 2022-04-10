import { Buffer } from 'node:buffer';

console.log(
  Buffer.from('hello, world').includes(Buffer.from('hello'))
)