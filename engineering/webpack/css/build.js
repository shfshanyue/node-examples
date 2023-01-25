const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

// 1. CSS 中的 background-image
//
// var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(12), __webpack_require__.b);
// var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// // Module
// ___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n", ""]);

function f1 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
      ]
    },
    output: {
      clean: true,
      path: path.resolve(__dirname, 'dist/css')
    },
    plugins: [
      new HtmlWebpackPlugin()
    ]
  })
}

f1().run(() => {

})
