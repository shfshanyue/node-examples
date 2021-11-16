# node_modules 的拓扑结构

1. 该项目依赖 `lodash` 与 `async` 两个 package
1. 首次下载 `lodash@^4.16.0`，此时最新版本为 `lodash@4.16.0`
1. 三个月后，下载 `package-b`，其依赖 `lodash@4.17.0`，此时最新版本为 `lodash@4.17.0`
