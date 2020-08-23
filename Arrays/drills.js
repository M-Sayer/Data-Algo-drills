// URLify

function url(str) {
  // const newStr = str.replace(/ /g, '%20')
  // return newStr
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      newStr += str[i]
    } else if (str[i] === ' ') {
      newStr += '%20'
    }
  }
  console.log(str[0])
  return newStr
  
}

console.log(url('this is a test boy'))

// O(n)

function filter(arr, value) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= value) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(filter([2, 4, 6, 8, 10], 5))

// O(n)

