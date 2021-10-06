const vm = require('vm');

// vm 用以隔离环境，在以下各个项目中都有使用
//
// 1. `create-react-app`
// 1. `webpack`

let f, run;

// vm.runInContext: 可在 v8 虚拟环境中直接执行代码
f = () => {
  const code = 'x += 1; y = 4'
  const context = { x: 10 }
  vm.createContext(context)
  vm.runInContext(code, context)

  console.log(context)
}

// vm.runInNewContext: 可不提供 Context，将返回最后一个表达式的值
f = () => {
  const code = 'x = 10; y = 20;'

  const o = vm.runInNewContext(code)
  console.log(o)
}

run = f


// script.runInContext: 可在 v8 虚拟环境中直接执行代码，代码由 Script 构建，Script 将对代码进行编译
f = () => {
  const script = new vm.Script(`x += 1; y = 4`)
  const context = { x: 10 }
  vm.createContext(context)
  script.runInContext(context)
}

// script.runInThisContenxt: 将由当前的 global 作为 context
f = () => {
  global.x = 3
  const script = new vm.Script(`x += 1; y = 4`)
  script.runInThisContext()
}


run()