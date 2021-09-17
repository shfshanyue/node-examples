// 数据结构:
// A: { value: 'hello', next: B }
// A -> B -> C -> D -> null

// 优点:: O(1) 的删除与添加最后一个元素
// 缺点: O(n) 的访问

// 在 node.js 中的应用:
// 1. 在 node.js 中，关于可读流的(ReadableStream)设计中，多余的数据使用 `buffered` 进行缓存，此时采取了链表的数据结构

class LinkedList {
  constructor () {
    this.head = new Node(null)
  }

  // 添加一个节点
  push (value) {
    const node = new Node(value, this.head)
    this.head = node
    return this
  }

  // 删除一个节点，并返回该节点
  remove () {
    if (!this.head) {
      return null
    }
    const node = this.head
    this.head = node.next
    return node
  }
}

class Node {
  constructor (value, next) {
    this.value = value
    this.next = next
  }
}