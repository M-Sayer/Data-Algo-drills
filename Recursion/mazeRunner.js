let smallMaze = [
  [' ', '', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
]

function solveMaze(maze) {
  let visited = maze
  let currentPath = []
  let allPaths = []

  function checkMove(maze, visited, row, column) {
    if((row >= 0) && (row < maze.length) && (column >= 0) && (column < maze[row].length) && (maze[row][column] !== '*') && (visited[row][column] !== '-')) {
      return true 
    }
    return false
  }
  
  function mazeRunner(maze, visited, row, column) {
    const directionRow = [0,0,-1,1] // left, right, up, down
    const directionColumn = [-1,1,0,0] // left, right, up, down
    const directions = ['L', 'R', 'U', 'D']
  
    //base case 
    if (maze[row][column] === 'e') {

      allPaths.push(currentPath.toString().replace(/,/g, ''))
      currentPath = []

    } else {

      console.log(currentPath)
      for (let i = 0; i < directionRow.length; i++) {
        const nextRow = row + directionRow[i]
        const nextColumn = column + directionColumn[i]
        
        visited[row][column] = '-'

        if(checkMove(maze, visited, nextRow, nextColumn)) {
          currentPath.push(directions[i])
          console.log(currentPath)

          console.log(visited)
          
          mazeRunner(maze, visited, nextRow, nextColumn)
          
        } else if (!checkMove(maze, visited, nextRow, nextColumn)) {
          // do something here ?
        }
      }
    }
  }
  mazeRunner(maze, visited, 0, 0)
  return allPaths
}

console.log(solveMaze(smallMaze))

