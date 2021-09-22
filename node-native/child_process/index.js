const { spawn, spawnSync, exec, execSync } = require('child_process')

// 示例一:
// 一个平平无奇的 hello, world
function f1 () {
  const ls = spawn('echo', ['hello, world'])

  console.log('PID:', ls.pid)

  // 事件中接收该进程的标准输出
  ls.stdout.on('data', (data) => {
    console.log('STDOUT', data)
  })

  ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`)
  })

  ls.on('close', code => {
    console.log('CLOSE', code)
  })

  ls.on('exit', code => {
    // 获得该进程的 EXIT CODE，如果是 0,代表执行成功
    console.log('EXIT', code)
  })
}

// 示例二:
// spawnSync 作为同步的写法
function f2 () {
  const data = spawnSync('echo', ['hello, world'])

  console.log(data)
  console.log(data.stdout)
  console.log(data.status)
}

// Unlike the exec(3) POSIX system call, child_process.exec() does not replace the existing process and uses a shell to execute the command.
function f3 () {
  const ls = exec('echo "hello, world"')

  console.log('PID:', ls.pid)

  // 事件中接收该进程的标准输出
  ls.stdout.on('data', (data) => {
    console.log('STDOUT', data)
  })

  ls.on('exit', code => {
    // 获得该进程的 EXIT CODE，如果是 0,代表执行成功
    console.log('EXIT', code)
  })
}

function f4 () {
  const echo = exec('echo $HOME')

  echo.stdout.on('data', data => {
    console.log('DATA', data)
  })
}

f4()
