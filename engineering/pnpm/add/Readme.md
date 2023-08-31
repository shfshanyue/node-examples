# pnpm/npm/yarn install 区别

`package.json` 中依赖如下：

```
{
  "dependencies": {
    "react": "^18.0.0"
  }
}
```

此时（20230831）符合 `react@^18.0.0` 版本号范围的版本是 `react@18.2.0`。

通过 `npm`/`yarn` 将会安装 `react@18.2.0`，**而通过 `pnpm` 安装将只会安装 `react@18.0.0`。**

```
$ pnpm i
Packages: +3
+++
Packages are hard linked from the content-addressable store to the virtual store.
  Content-addressable store is at: /Users/xiange/Library/pnpm/store/v3
  Virtual store is at:             node_modules/.pnpm
Progress: resolved 3, reused 3, downloaded 0, added 3, done

dependencies:
+ react 18.0.0 (18.2.0 is available)

Done in 1.7s
```

## 实践

``` bash
$ rm -rf node_modules

$ rm pnpm-lock.yaml package-lock.json yarn.lock

# 分别使用三种包管理器进行安装，并通过 lock 文件观察安装版本
$ pnpm i
```