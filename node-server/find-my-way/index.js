const http = require('http')
const router = require('find-my-way')()

const server = http.createServer((req, res) => {
  router.lookup(req, res)
})

router.on('GET', '/api', () => {})
router.on('GET', '/api/users/:id', (req, res) => { res.end('id') })
router.on('GET', '/api/users/10086', (req, res) => { res.end('10086') })
router.on('GET', '/api/users-friends', () => {})

console.log(router.prettyPrint())

server.listen(3000)