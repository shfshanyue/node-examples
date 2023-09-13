# npm update/dedupe

提供了 npm/pnpm 两个 npm 包，检测 update 以及 dedupe 功能的示例。

该项目提供了两个 `npm` 包，即 `packages/a` 与 `packages/b`，而二者依赖如下，并锁死在 `package-lock.json`/`pnpm-lock.yaml` 中。

+ `a` 依赖 `postcss@^8.4.10`，实际安装 `postcss@8.4.10`
+ `b` 依赖 `postcss@8.4.28`，实际安装 `postcss@8.4.28`

## npm update

使用 `npm update` 以及 `pnpm update` 观察 `lockfile` 文件变化。

``` bash
$ npm i
# 观察 lockfile 文件变化
$ npm update

# 回退
$ git checkout .

$ pnpm i
# 观察 lockfile 文件变化
$ pnpm update
$ pnpm update --filter a

# 回退
$ git checkout .
```

## npm dedupe

使用 `npm dedupe` 以及 `pnpm dedupe` 观察 `lockfile` 文件变化。

``` bash
$ npm i
# 观察 lockfile 文件变化
$ npm dedupe

# 回退
$ git checkout .

$ pnpm i
# 观察 lockfile 文件变化
$ pnpm dedupe

$ ls -lah packages/a/node_modules/postcss
lrwxr-xr-x  1 xiange  staff    63B Sep 13 19:25 packages/a/node_modules/postcss -> ../../../node_modules/.pnpm/postcss@8.4.28/node_modules/postcss
$ ls -lah packages/b/node_modules/postcss
lrwxr-xr-x  1 xiange  staff    63B Sep 13 19:22 packages/b/node_modules/postcss -> ../../../node_modules/.pnpm/postcss@8.4.28/node_modules/postcss

# 回退
$ git checkout .
```

以下是 `npm dedupe` 结果

```
diff --git a/engineering/npm/dedupe/package-lock.json b/engineering/npm/dedupe/package-lock.json
index 5b81e5a..783f13c 100644
--- a/engineering/npm/dedupe/package-lock.json
+++ b/engineering/npm/dedupe/package-lock.json
@@ -42,52 +42,7 @@
       "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.0.0.tgz",
       "integrity": "sha512-1fygroTLlHu66zi26VoTDv8yRgm0Fccecssto+MhsZ0D/DGW2sm8E8AjW7NU5VVTRt5GxbeZ5qBuJr+HyLYkjQ=="
     },
-    "node_modules/source-map-js": {
-      "version": "1.0.2",
-      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.0.2.tgz",
-      "integrity": "sha512-R0XvVJ9WusLiqTCEiGCmICCMplcCkIwwR11mOSD9CR5u+IXYdiseeEuXCVAjS54zqwkLcPNnmU4OeJ6tUrWhDw==",
-      "engines": {
-        "node": ">=0.10.0"
-      }
-    },
-    "packages/a": {
-      "version": "1.0.0",
-      "license": "ISC",
-      "dependencies": {
-        "postcss": "^8.4.10"
-      }
-    },
-    "packages/a/node_modules/postcss": {
-      "version": "8.4.10",
-      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.10.tgz",
-      "integrity": "sha512-84ERZDkObgU3JLeBzqB0DK3+kFHhhxAngTIeOL4cAykcVYaY4ie3iAzaroXpYeHJNZcPIVvbGAyRxDsqJUUSJg==",
-      "funding": [
-        {
-          "type": "opencollective",
-          "url": "https://opencollective.com/postcss"
-        },
-        {
-          "type": "tidelift",
-          "url": "https://tidelift.com/funding/github/npm/postcss"
-        }
-      ],
-      "dependencies": {
-        "nanoid": "^3.3.1",
-        "picocolors": "^1.0.0",
-        "source-map-js": "^1.0.2"
-      },
-      "engines": {
-        "node": "^10 || ^12 || >=14"
-      }
-    },
-    "packages/b": {
-      "version": "1.0.0",
-      "license": "ISC",
-      "dependencies": {
-        "postcss": "8.4.28"
-      }
-    },
-    "packages/b/node_modules/postcss": {
+    "node_modules/postcss": {
       "version": "8.4.28",
       "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.28.tgz",
       "integrity": "sha512-Z7V5j0cq8oEKyejIKfpD8b4eBy9cwW2JWPk0+fB1HOAMsfHbnAXLLS+PfVWlzMSLQaWttKDt607I0XHmpE67Vw==",
@@ -113,6 +68,28 @@
       "engines": {
         "node": "^10 || ^12 || >=14"
       }
+    },
+    "node_modules/source-map-js": {
+      "version": "1.0.2",
+      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.0.2.tgz",
+      "integrity": "sha512-R0XvVJ9WusLiqTCEiGCmICCMplcCkIwwR11mOSD9CR5u+IXYdiseeEuXCVAjS54zqwkLcPNnmU4OeJ6tUrWhDw==",
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
+    "packages/a": {
+      "version": "1.0.0",
+      "license": "ISC",
+      "dependencies": {
+        "postcss": "^8.4.10"
+      }
+    },
+    "packages/b": {
+      "version": "1.0.0",
+      "license": "ISC",
+      "dependencies": {
+        "postcss": "8.4.28"
+      }
     }
   }
 }

```

以下是 `pnpm dedupe` 结果

```
diff --git a/engineering/npm/dedupe/pnpm-lock.yaml b/engineering/npm/dedupe/pnpm-lock.yaml
index 4507c36..db8f2ae 100644
--- a/engineering/npm/dedupe/pnpm-lock.yaml
+++ b/engineering/npm/dedupe/pnpm-lock.yaml
@@ -12,7 +12,7 @@ importers:
     dependencies:
       postcss:
         specifier: ^8.4.10
-        version: 8.4.10
+        version: 8.4.28
 
   packages/b:
     dependencies:
@@ -32,15 +32,6 @@ packages:
     resolution: {integrity: sha512-1fygroTLlHu66zi26VoTDv8yRgm0Fccecssto+MhsZ0D/DGW2sm8E8AjW7NU5VVTRt5GxbeZ5qBuJr+HyLYkjQ==}
     dev: false
 
-  /postcss@8.4.10:
-    resolution: {integrity: sha512-84ERZDkObgU3JLeBzqB0DK3+kFHhhxAngTIeOL4cAykcVYaY4ie3iAzaroXpYeHJNZcPIVvbGAyRxDsqJUUSJg==}
-    engines: {node: ^10 || ^12 || >=14}
-    dependencies:
-      nanoid: 3.3.6
-      picocolors: 1.0.0
-      source-map-js: 1.0.2
-    dev: false
-
   /postcss@8.4.28:
     resolution: {integrity: sha512-Z7V5j0cq8oEKyejIKfpD8b4eBy9cwW2JWPk0+fB1HOAMsfHbnAXLLS+PfVWlzMSLQaWttKDt607I0XHmpE67Vw==}
     engines: {node: ^10 || ^12 || >=14}
```