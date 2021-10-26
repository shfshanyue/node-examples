const url = new URL('./index.json', import.meta.url)

fetch(url).then(res => res.json()).then(o => {
  console.log(o)
})