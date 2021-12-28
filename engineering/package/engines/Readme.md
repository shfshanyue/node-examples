# engines in package.json

> 你需要手动去修改 package.json 中的 engines 字段去测试

其中 `ansi-regex` 该依赖所需的 node 版本号为 `12+`，而此时本地的 node 版本号为 10，使用 yarn 安装报错！

``` js
// 在 package.json 中，所需 node 版本号需要 >=10
{
  "engines": {
    "node": ">=10.0.0"
  }
}

// 在 package-lock.json 中，所需 node 版本号需要 >=12
{
  "node_modules/ansi-regex": {
    "version": "6.0.1",
    "engines": {
      "node": ">=12"
    }
  }
}
```