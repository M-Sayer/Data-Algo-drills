
function countingSheep(num) {
  if (num === 0) {
    return console.log('All sheep jumped over the moon')
  }

  console.log(`${num}: Another sheep jumps over the moon`)
  countingSheep(num-1)
}

countingSheep(5) 


function powerCalculator(int, exp) {
  if(exp <= 0) {
    return 1
  } 

  if(exp === 1) {
    return int
  }

  return int * powerCalculator(int, exp - 1)
}

console.log(powerCalculator(10, 3))


function reverseString(string) {
  if(string.length === 0) {
    return ''
  }

  return string[string.length - 1] + reverseString(string.replace(string.slice(-1), ''))
}

console.log(reverseString('string'))


function triangularNumber(number) {
  if(number === 0) {
    return null
  }

  return number + triangularNumber(number - 1)
}

console.log(triangularNumber(9))

// input
// output array
function stringSplitter(string) {

  if(string === '') {
    return ''
  }

  const regex = /[a-zA-Z0-9]/
  return [regex.test(string[0]) ? string[0] + stringSplitter(string.slice(1)) :' ' + stringSplitter(string.slice(1))]
}

console.log(stringSplitter('abc as'))

function split(str, sep) { 
  let idx = str.indexOf(sep); 
  if (idx === -1) return [str];

  return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep)); }
  
  console.log(split('1/21/2018', '/'))


function fibonacci(number) {
  if (number <= 0) {
    return 0
  }
  
  if (number === 1) {
    return 1
  }

  return fibonacci(number - 1) + fibonacci(number - 2)
}

console.log(fibonacci(5))


function factorial(number) {
  if (number === 1) {
    return 1
  }

  return number * factorial(number - 1)
}

console.log(factorial(5))




function anagrams(string){
  const output = [];
  function traverse(string, perm = ''){
    if (!string) output.push(perm)
    for (let i = 0; i < string.length; i++){
      traverse(string.slice(0,i) + string.slice(i+1), perm + string[i]);
    }
  }
  traverse(string)
  return output
}

console.log(anagrams('abc'))

function anagram(string) {
  let output = []
  if(string === '') {
    return []
  } else if(string.length === 1) {
    return [ string ]
  }

  for (let i = 0; i < string.length; i++) {
    let prefix = string[i]
    let str = string.substring(0, i) + string.substring(i+1)
    let results = anagram(str)
    results = results.map(res => prefix + res)
    output = output.concat(results)
  } 
  return output

}

console.log(anagram('abc'))


function printOrg(obj) {

  for ( const [key, value] of Object.entries(obj)) {
    console.log(key, value)
    if (typeof value === 'object') {
      console.log(key)
      printOrg(value)
    } else {
      console.log(key)
      console.log(value)}
  }
}


console.log(printOrg({test: 'test', testing: { test2: 'test2'}})) 

let smallMaze = [
  [' ', ' ', ' '],
  [' ', '*', '*'],
  [' ', ' ', 'e']
]

function solveMaze(maze, row, column) {
  if (maze[row][column] === 'e') {
    return ''
  }

  maze[row][column] = '*'
  console.log(column)
  //left
  if(column > 0) {
    if (maze[row][column-1] !== '*' ) {
      const result = solveMaze(maze, row, column - 1)
      if( result !== 'x') {
        return 'L' + result
      }
    }
  }

  // right
  if(column < maze[row].length - 1) {
    if (maze[row][column+1] !== '*') {
      const result = solveMaze(maze, row, column + 1)
      if( result !== 'x') {
        return 'R' + result
      }
    }
  }

  //up
  if(row > 0) {
    if (maze[row-1][column] !== '*') {
      const result = solveMaze(maze, row-1, column)
      if( result !== 'x') {
        return 'U' + result
      }
    }
  }

  //down
  if(row < maze.length-1) {
    if (maze[row+1][column] !== '*') {
      const result = solveMaze(maze, row+1, column)
      if( result !== 'x') {
        return 'D' + result
      }
    }
  }

  maze[row][column] = ' '
  return 'x'

}
console.log(solveMaze(smallMaze,0,0))
