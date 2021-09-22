const { Worker, isMainThread } = require('worker_threads');

let f, run

f = () => {
  if (isMainThread) {
    new Worker(__filename)
  } else {
    console.log('Inside Worker!')
    console.log(isMainThread)
  }
}

f()