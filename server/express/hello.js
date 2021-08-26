const express = require('express')
const app = express()

app.use('/api',
  (req, res, next) => {
    // 应用中间件 A
    console.log('Application Level Middleware: A')
    next()
  },
  (req, res, next) => {
    // 应用中间件 B
    console.log('Application Level Middleware: B')
    next()
  }
)

app.get('/api',
  (req, res, next) => {
    // 路由中间件 A
    console.log('Route Level Middleware: C')
    next()
  },
  (req, res, next) => {
    // 路由中间件 A
    console.log('Route Level Middleware: D')
    res.json({ hello: 'world' })
  }
)

app.get('/api/users/:id', (req, res) => {
  res.json({ hello: 'world', id: req.params.id })
})

app.listen(3000);
console.log('Express started on port 3000');
