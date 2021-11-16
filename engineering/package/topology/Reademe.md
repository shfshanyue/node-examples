# node_modules 的拓扑结构

1. 该项目依赖 `async` 与 `webpack-merge` 两个 package
1. `async` 依赖 `lodash@^4.17.14`
1. `webpack-merge` 依赖 `lodash^4.17.15`
1. 装包之后，二者共同依赖 `lodash@4.17.21`，并被 lockfile 锁住

详见 `yarn.lock` 及 `package-lock.json`。

``` yaml
"async@^2.0.0":
  dependencies:
    "lodash" "^4.17.14"

"lodash@^4.17.14", "lodash@^4.17.15":
  "version" "4.17.21"

"webpack-merge@^4.0.0":
  dependencies:
    "lodash" "^4.17.15"
```

``` json
{
  "async": {
    "version": "2.6.3",
    "requires": {
      "lodash": "^4.17.14"
    }
  },
  "lodash": {
    "version": "4.17.21",
  },
  "webpack-merge": {
    "version": "4.2.2",
    "requires": {
      "lodash": "^4.17.15"
    }
  }
}
```