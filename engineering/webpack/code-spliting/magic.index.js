import(  /* webpackChunkName: 'sum' */ './sum').then(m => {
  console.log(m.default(3, 4))
})