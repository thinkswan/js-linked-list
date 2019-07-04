/*
 * Basic example of a linked list
 */

const n1 = {
  data: 100
}

const n2 = {
  data: 200
}

n1.next = n2

console.log("n1", n1) // n1: { data: 100, next: { data: 200 } }

/*
 * Class implementation of a node
 */

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

const n3 = new Node(100)

console.log("n3", n3) // n3: Node { data: 100, next: null }

/*
 * Class implementation of a linked list
 */

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  insertFirst(data) {
    const node = new Node(data, this.head)

    this.head = node
    this.size += 1
  }

  insertLast(data) {
    const node = new Node(data)
    let current

    if (!this.head) {
      this.head = node
      return
    }

    current = this.head

    while (current.next) current = current.next

    current.next = node

    this.size += 1
  }

  insertAt(data, index) {
    // Index is out of range
    if (index > 0 && index > this.size) return

    // First index
    if (index === 0) {
      this.insertFirst(data)
      return
    }

    const node = new Node(data)
    let current
    let previous
    let count = 0

    current = this.head

    while (count < index) {
      previous = current // Node before index
      count += 1
      current = current.next // Node after index
    }

    node.next = current
    previous.next = node

    this.size += 1
  }

  getAt(index) {
    let current = this.head
    let count = 0

    while (current) {
      if (count === index) {
        console.log("Node", {
          data: current.data,
          next: current.next ? current.constructor : current.next
        })
        return
      }

      count += 1
      current = current.next
    }

    return null
  }

  removeAt(index) {
    if (index > 0 && index > this.size) return

    let current = this.head
    let previous
    let count = 0

    if (index === 0) {
      this.head = current.next
      return
    }

    while (count < index) {
      count += 1
      previous = current
      current = current.next
    }

    previous.next = current.next
    this.size -= 1
  }

  clear() {
    this.head = null
    this.size = 0
  }

  toString() {
    let current = this.head

    while (current) {
      console.log("Node", {
        data: current.data,
        next: current.next ? current.constructor : current.next
      })

      current = current.next
    }
  }
}
