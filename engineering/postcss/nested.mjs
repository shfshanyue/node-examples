import postcss from 'postcss'
import postcssNested from 'postcss-nested'

const css = `
.container {
  .item {
    color: #888;
  }
}
`

postcss([postcssNested])
  .process(css, { from: 'index.css' })
  .then(result => {
    console.log(result)
  })
