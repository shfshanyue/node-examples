const express = require('express')
const app = express()

app.get('/api', (req, res, next) => {
  next()
})

app.listen(3000);
console.log('Express started on port 3000');
