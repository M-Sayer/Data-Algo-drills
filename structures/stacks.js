class _Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class Stack {
  constructor() {
    this.top = null
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null)
      return this.top
    }

    const node = new _Node(data, this.top)
    this.top = node
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

const starTrek = new Stack()

starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')

console.log(starTrek)

function peek(stack) {
  return stack.top.data
}

console.log(peek(starTrek))

function isEmpty(stack) {
  if (stack.top === null) {
    return 'empty'
  }
  return 'not empty'
}

console.log(isEmpty(starTrek))

function display(stack) {
  for (const keys in stack) {
    
  }
}
console.log(display(starTrek))

