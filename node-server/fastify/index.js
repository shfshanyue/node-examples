const fastify = require('fastify')({
  logger: true
})

// 1. 在 fastify 中使用 find-my-way 前缀树作为路由

fastify.get('/', (request, reply) => {
  reply.res.end('hello, world')
})

fastify.get('/api/users/10086', async (request, reply) => {
  return { userId: 10086, direct: true }
})

fastify.get('/api/users/:id', async (request, reply) => {
  const id = request.params.id
  return { userId: id }
})

fastify.listen(3300, (err, address) => {
  if (err) throw err
  // Server is now listening on ${address}
})
