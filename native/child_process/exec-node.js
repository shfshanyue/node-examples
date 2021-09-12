const { spawn } = require('child_process')

function executeNodeScript(source, { args = [] } = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(
      process.execPath,
      [...args, '-e', source],
    )
    let result = ''

    child.stdout.on('data', data => {
      result += data
    })

    child.on('close', code => {
      if (code !== 0) {
        reject({
          command: `node ${args.join(' ')}`
        });
        return
      }
      resolve(result)
    })
  })
}

executeNodeScript(`
  const a = 3;
  console.log(a)
`).then(o => {
  console.log(o)
})