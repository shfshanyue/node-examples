import Link from 'next/link'
import { Suspense, lazy } from 'react'
import dynamic from 'next/dynamic'

// 在 next.js 中的 dynamic 中，假设异步加载一个组件需要十秒钟
// ssr: true -> 等待所有组件共同渲染为 html 后，一起加载
// ssr: false -> 只需要主题部分渲染为 html、hydrate，随后由客户端加载异步组件

// [New Suspense SSR Architecture in React 18](https://github.com/reactwg/react-18/discussions/37)
// 


const sleep = n => new Promise(resolve => setTimeout(resolve, n))

const Hello = lazy(async () => {
  console.log('Loading Hello....')
  await sleep(10000)
  return import('../components/hello')
})

const Hello2 = dynamic(async () => {
  console.log('Loading Hello2....')
  await sleep(10000)
  return import('../components/hello')
}, {
  // suspense: true,
  ssr: false
})

function Loading () {
  return (
    <div>
      loading...
    </div>
  )
}

export default function IndexPage() {
  return (
    <div>
      <div>这是一个关于 Suspense 的示例</div>
      {/* <Suspense fallback={<Loading />}> */}
        <Hello2 />
      {/* </Suspense> */}
    </div>
  )
}
