function solveMaze(maze) {
  let visited = maze;
  const paths = [];
  const route = [];
  function mazeRunner(maze, visited, row, column) {
    const directionRow = [0, 0, -1, 1]; // left, right, up, down
    const directionColumn = [-1, 1, 0, 0]; // left, right, up, down
    const directions = ["L", "R", "U", "D"];
    
    function checkMove(maze, visited, row, column) {
      if (
        row >= 0 &&
        row < maze.length &&
        column >= 0 &&
        column < maze[row].length &&
        maze[row][column] !== "*" &&
        visited[row][column] !== "-"
      ) {
        return true;
      }
      return false;
    }

    //base case
    if (maze[row][column] === "e") {
      paths.push(route.join("")); //add route to successful paths
    } else { // recursive case
      visited[row][column] = "-"; // mark as visited
      for (let i = 0; i < directionRow.length; i++) {
        const nextRow = row + directionRow[i];
        const nextColumn = column + directionColumn[i];
        if (checkMove(maze, visited, nextRow, nextColumn)) {
          route.push(directions[i]); // put the direction on the current path
          mazeRunner(maze, visited, nextRow, nextColumn);
          route.pop(); // take the direction off the current path
        }
      }
      visited[row][column] = ' ' // unmark as visited
    }
    return paths;
  }
  return mazeRunner(maze, visited, 0, 0);
}

let smallMaze = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', '*', 'e']
]

console.log(solveMaze(smallMaze))