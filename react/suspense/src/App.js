import React, { Suspense } from 'react'
import './styles.css'

// 1. 在以下示例中，添加 Suspense 与不添加 Suspense 有何区别，此处 Hello 懒加载需要 5秒钟
// 答: 添加 Suspense 会先加载主要部分代码并渲染，而不加需要 5s 之后才能开始渲染

const sleep = n => new Promise(r => setTimeout(r, n))

const Hello = React.lazy(async () => {
  await sleep(5000)
  return import('./Hello')
})

export default function App() {
  return (
    <div className="App">
      <h1>Hello App</h1>
      {/* <Hello /> */}
      <Suspense fallback={'loading...'}>
        <Hello />
      </Suspense>
    </div>
  );
}
