# React 17 中 Math.random() 与 Timestamp 服务端渲染与客户端渲染不一致的问题

一个组件在 Node 与浏览器环境中会各执行一遍，如果是一个随机数或者时间戳，则二者环境不同，将会抛出一个警告 `Text content did not match`。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b79e4a4d1ed44f5fb54f7400ca6e6281~tplv-k3u1fbpfcp-watermark.image?)