const EventEmitter = require('events')

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter()

myEmitter.on('click', () => {
  console.log('Listing click event one');
})

myEmitter.on('click', () => {
  console.log('Listing click event two');
})

myEmitter.on('click', () => {
  console.log('Listing click event once one');
})

myEmitter.on('click', () => {
  console.log('Listing click event once two');
})

myEmitter.emit('click')
myEmitter.emit('click')
myEmitter.emit('click')

console.log(myEmitter.listenerCount('click'))