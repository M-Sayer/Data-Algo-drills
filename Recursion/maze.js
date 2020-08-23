// let smallMaze = [
//   [' ', '*', ' '],
//   [' ', '*', ' '],
//   [' ', ' ', 'e']
// ]

let bigMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

// function solveMaze(maze, row, column) {
//   let path = []
//   if (maze[row][column] === 'e') {
//     // const result = solveMaze(maze, row, column)
//     return path
//   }

//   // current position
//   maze[row][column] = '*'
//   console.log(row,column)
  
//   //left
//   if(column > 0) {
//     if (maze[row][column-1] !== '*' ) {
//       const result = solveMaze(maze, row, column - 1)
//       if(result !== 'x') {
//         return path += 'L' + result
//       }
//     }
//   }

//   // right
//   if(column < maze[row].length - 1) {
//     if (maze[row][column+1] !== '*') {
//       const result = solveMaze(maze, row, column + 1)
//       if( result !== 'x') {
//         return path += 'R' + result
//       }
//     }
//   }

//   //up
//   if(row > 0) {
//     if (maze[row-1][column] !== '*') {
//       const result = solveMaze(maze, row-1, column)
//       if(result !== 'x') {
//         return path += 'U' + result
//       }
//     }
//   }

//   //down
//   if(row < maze.length-1) {
//     if (maze[row+1][column] !== '*') {
//       const result = solveMaze(maze, row+1, column)
//       if( result !== 'x') {
//         return path += 'D' + result
//       }
//     }
//   }

//   maze[row][column] = ' '
//   if (maze[row][column] !== 'e') {
//     return 'x'
//   }


// }
// console.log(solveMaze(smallMaze,0,0))
// console.log(solveMaze(bigMaze, 0, 0))

// start at 0, 0
// check to see if it is possible to move in a direction
// for each direction recursively check for moves in each direction
// mark each previous position to prevent visiting previous positions
// if e is reached, return path to reach e
// function should return an array of possible paths

let smallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
]

function mazeRunner(maze) {
  let paths = []

  let row = 0
  let column = 0
  const left = maze[row][column - 1]
  const right = maze[row][column + 1]
  let up
  column > 0 ? up = maze[row - 1][column] : null
  const down = maze[row + 1][column]
  const wall = '*'
  const checked = '-'
  const exit = 'e'
  const free = ' '
  // let currentPosition = maze[row][column]

  function traversal(maze, row, column) {
    // left, right, up, down
    // if(maze[row][column] === 'e') {
    //   return true
    // } 
    if (left === exit || right === exit || up === exit || down === exit ) {
      return true // move is the exit
    } else if (column < 0 || column > maze[row].length -1 || row < 0 || row > maze.length -1) {
      return false // move is out of bounds
    } else if (left === wall || right === wall || up === wall || down === wall) {
      return false // move hits a wall
    } else if (left === checked || right === checked || up === checked || down === checked) {
      return false // 
    }
    else {
      //if a direction is free, call traversal and add direction to array
      let currentPath = []
      maze[row][column] = checked

      if (left === free) {
        const results = traversal(maze, row, column - 1)
        results && currentPath.push('L')
      }
      if (right === free) {
        const results = traversal(maze, row, column + 1)
        results && currentPath.push('R')
      }
      if (up === free) {
        const results = traversal(maze, row - 1, column)
        results && currentPath.push('U')
      }
      if (down === free) {
        const results = traversal(maze, row + 1, column)
        results && currentPath.push('D')
      }


      const moveLeft = traversal(maze, row, column - 1)
      const moveRight = traversal(maze, row, column + 1)
      const moveUp = traversal(maze, row - 1, column)
      const moveDown = traversal(maze, row + 1, column)

      moveLeft && currentPath.push('L')
      moveRight && currentPath.push('R')
      moveUp && currentPath.push('U')
      moveDown && currentPath.push('D')

      return currentPath
    }
  }
  
  return traversal(maze, row, column)
}

console.log(mazeRunner(smallMaze))