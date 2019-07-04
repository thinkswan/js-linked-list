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
