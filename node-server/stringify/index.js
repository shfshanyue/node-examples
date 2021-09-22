const http = require('http')
const fastJson = require('fast-json-stringify')
const { sjs, attr } =  require('slow-json-stringify')

const data = {
  id: 10,
  name: 'shanyue'
}

const stringify = fastJson({
  title: 'Example Schema',
  type: 'object',
  properties: {
    id: {
      type: 'integer'
    },
    name: {
      type: 'string'
    }
  }
})

const slowStringify = sjs({
  id: attr('number'),
  name: attr('string')
})

const server = http.createServer((req, res) => {
  res.end(slowStringify(data))
})

server.listen(3000)

