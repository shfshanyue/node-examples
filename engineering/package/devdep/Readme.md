# dependencies 与 devDepdencies 的区别

**当在项目中安装一个依赖的 Package 时，该依赖的 dependencies 也会安装到项目中，即被下载到 node_modules 目录中。但是 devDependencies 不会**

另外，你可以观察该项目的 lockfile

+ [pnpm-lock.yaml](./pnpm-lock.yaml)
+ [yarn.lock](./yarn.lock)
+ [package-lock.json](./package-lock.json)

问题见: [dependencies 与 devDependencies 有何区别](https://q.shanyue.tech/engineering/521.html)
