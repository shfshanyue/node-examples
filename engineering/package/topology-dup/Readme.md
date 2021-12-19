# pnpm 的优势

> 问题见: [pnpm 有何优势](https://q.shanyue.tech/engineering/751.html)

1. 减少重复依赖
1. 避免幽灵依赖

分别使用 npm、yarn 以及 pnpm 装包，可通过以下命令查看 node_modules 的体积大小。

``` bash
$ du -h -d 0 node_modules 
```

可通过修改 node_modules 某个 package 的文件内容，在全局目录 `~/.pnpm` 使用以下命令全局搜索修改关键字发现其硬链接对应的路径。

``` bash
$ grep -R xxx ~/.pnpm | less
```
