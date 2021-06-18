const EventEmitter = require('events')

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter()

myEmitter.on('click', () => {
  console.log('Listing click event');
})

myEmitter.on('click', () => {
  console.log('Listing click event');
})

myEmitter.emit('click')