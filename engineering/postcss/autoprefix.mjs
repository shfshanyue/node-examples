import postcss from 'postcss'
import autoprefixer from 'autoprefixer'


const css = `
.container {
  .item {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
`

postcss([autoprefixer])
  .process(css, { from: 'index.css' })
  .then(result => {
    console.log(result)
  })
