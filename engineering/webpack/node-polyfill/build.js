const webpack = require('webpack')
const path = require('path')

// 在某些 package 中，使用了原生的 Buffer、Path、URL 等 nodejs 中的内建模块，因为无法在浏览器端使用
// 因为其与操作系统无关，是在浏览器中可通过 poloyfill 进行模拟实现，如此，便在浏览器中也可以使用这些库
// 那如何在 webpack 中进行 polyfill 呢？
//
// 1. 在 webpack 如何 polyfill buffer

function f1() {
  return webpack({
    entry: './index.mjs',
    mode: 'none',
    optimization: {
      emitOnErrors: true,
    },
    output: {
      iife: false,
      pathinfo: 'verbose'
    },
    // resolve: {
    //   fallback: {
    //     'node:buffer': require.resolve('buffer')
    //   },
    //   alias: {
    //     'node:buffer': require.resolve('buffer')
    //   }
    // },
    plugins: [
      new webpack.NormalModuleReplacementPlugin(/node:/, (resource) => {
        const mod = resource.request.replace(/^node:/, '');
        switch (mod) {
          case "buffer":
            resource.request = 'buffer'
            break;
          default:
            throw new Error(`Not found ${mod}`);
        }
      }),
    ]
  })
}

f1().run((err, stat) => {
  console.log(err)
})
