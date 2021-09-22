import('./sum').then(m => {
  console.log(m.default(3, 4))

  import('./add').then(m => {
    console.log(m.default(3, 4))
  })
})