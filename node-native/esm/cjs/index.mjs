// ESM语法
import math from './math.js';
import mathDefault from './math.js';

import { add, subtract } from './math.js'; // 错误！

console.log(math.add(1, 2)); // 正确使用
console.log(math.subtract(3, 2)); // 正确使用

console.log(mathDefault, math, add, subtract)

