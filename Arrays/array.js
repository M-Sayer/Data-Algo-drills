const memory = require('./memory') 

class Array {
  constructor() {
    this.length = 0
    this.capacity = 0
    this.ptr = memory.allocate(this.length)
  }

  push(value) {
    if (this.length >= this.capacity){
      this.resize(this.length + 1) * Array.SIZE_RATIO
    }
    this.resize(this.length + 1)
    memory.set(this.ptr + this.length, value)
    this.length ++
  }

  resize(size) {
    const oldPtr = this.ptr
    this.ptr = memory.allocate(size)
    if (this.ptr === null) {
      throw new Error('out of memory')
    } 
    memory.copy(this.ptr, oldPtr, this.length)
    memory.free(oldPtr)
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('index error')
    }
    return memory.get(this.ptr + index)
  }

  pop() {
    if (this.length === 0) {
      throw new Error('index error')
    }
    const value = memory.get(this.ptr + this.length - 1)
    this.length --
    return value
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error('index error')
    }

    if (this.length > this.capacity) {
      this.resize((this.length + 1) * Array.SIZE_RATIO)
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
    memory.set(this.ptr + index, value)
    this.length ++
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      throw new Error('index error')
    }

    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1)

  }
}
Array.SIZE_RATIO = 3

function main() {
  Array.SIZE_RATIO = 3

  let arr = new Array()

  arr.push(3)

  console.log(arr)
}

console.log(main())