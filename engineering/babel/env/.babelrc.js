const config1 = {
  presets: ['@babel/preset-env']
}

const config2 = {
  targets: 'chrome 94',
  presets: ['@babel/preset-env']
}

// useBuiltIns: usage. 按需引入，需要用到那个 API 就引入哪个
const config3 = {
  targets: 'chrome 80',
  presets: [
    [
      '@babel/preset-env', {
        useBuiltIns: 'usage',
        corejs: 3
      }
    ]
  ]
}

// useBuiltIns: entry. 手动引入，全量引入
const config4 = {
  targets: 'chrome 80',
  presets: [
    [
      '@babel/preset-env', {
        useBuiltIns: 'entry',
        corejs: 3
      }
    ]
  ]
}

module.exports = function (api) {
  api.cache(false)

  return config4
}