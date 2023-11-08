# resolve 算法

在 node.js 中通过 require/import 加载一个软链接（`Symbolic Link`）的模块时，node.js 会自动跟踪并执行**软链接其指向的真实文件路径**。

示例：

```
$ node index.js
/Users/xiange/Documents/node-examples/engineering/resolve/linkTo/link.js

$ node --preserve-symlinks index.js 
/Users/xiange/Documents/node-examples/engineering/resolve/link.js
```