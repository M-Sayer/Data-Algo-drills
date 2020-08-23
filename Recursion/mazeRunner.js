let smallMaze = [
  [' ', '*', ' '],
  [' ', '*', ' '],
  [' ', '*', 'e']
]

function solveMaze(maze) {
  let visited = maze
  const paths = []
  const newPaths = []
  let route = []
  const allPaths = []
  
  function mazeRunner(maze, visited, row, column, route) {
    const directionRow = [0,0,-1,1] // left, right, up, down
    const directionColumn = [-1,1,0,0] // left, right, up, down
    const directions = ['L', 'R', 'U', 'D']

    function checkMove(maze, visited, row, column) {
      if((row >= 0) && (row < maze.length) && (column >= 0) && (column < maze[row].length) && (maze[row][column] !== '*') && (visited[row][column] !== '-')) {
        return true 
      }
      return false
    }
  
    //base case 
    if (maze[row][column] === 'e') {
      newPaths.push(' ')

      paths.push(route.join(''))
      console.log(route)
      console.log(paths)
      return route = []
    } else {
      for (let i = 0; i < directionRow.length; i++) {
        const nextRow = row + directionRow[i]
        const nextColumn = column + directionColumn[i]
        
        visited[row][column] = '-'

        if(checkMove(maze, visited, nextRow, nextColumn)) {
          newPaths.push(directions[i])
          console.log(newPaths)
          
          route.push(directions[i])
          console.log(route)
          
          console.log(visited)
          
          mazeRunner(maze, visited, nextRow, nextColumn, route)
          
          console.log(paths)
          // currentPath = ''
          // // visited[nextRow][nextColumn] = '-'
          // visited = maze
        } else if (!checkMove(maze, visited, nextRow, nextColumn)) {
          
        }
      }
    }
  }
  mazeRunner(maze, visited, 0, 0, route)
  return newPaths.toString().replace(/,/g, '')
}

console.log(solveMaze(smallMaze))

