// {
let canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    CanvasDim = Width = Height = 1000;

canvas.addEventListener('click',()=>{
   main()
})

// n x n grid of cells
let n = 45,
// Calc cell dimensions
    cellDem = CanvasDim / n
    grid = new Grid2D(n)
    // console.log(grid);
    mesh = new Mesh2D(grid, Width, Height)
    maze = new Maze(grid.grid)
    positions = []
    finish = []
    finished = false
    myReq = null



function main() {
   init()
   play()
}

function init(){
   canvas.width = canvas.height = CanvasDim
   ctx.clearRect(0,0,canvas.width, canvas.height)
   positions = []
   finish = []
   finished = false
   maze.construct()
   grid.grid = maze.getGrid()
   insertGoals()
}

function play() {
   if (positions.length > 0){
      let pos = positions.shift()
      if (pos[0] == finish[0] && pos[1] == finish[1]) {
         pos.push(100)
         grid.update(...pos)
         mesh.updateGrid(grid)
         mesh.drawMesh()
         console.log('SUCCESS');
         finished = true
      }
      step(pos)
      mesh.updateGrid(grid)
      mesh.drawMesh()
   } else {
      console.log('Fail');
      finished = true
   }
   if (!finished){
      myReq = window.requestAnimationFrame(play)
   } else {
      window.cancelAnimationFrame(myReq)
   }

}

//Brute Force Method of search
// Possibly bredth first search because it grows in all directions equally
function step(arr) {
   row = arr[0]
   col = arr[1]
   console.log(row, col);

   // console.log(positions.length);
   if (grid.up(row, col) > 0){
      positions.push(grid.stepUp(row, col))
      console.log('Up');
      // step(grid.stepUp(row, col))
   }
   if (grid.down(row, col) > 0){
      positions.push(grid.stepDown(row, col))
      console.log('Down');
      // step(grid.stepDown(row, col))
   }
   if (grid.left(row, col) > 0){
      positions.push(grid.stepLeft(row, col))
      console.log('Left');
      // step(grid.stepLeft(row, col))
   }
   if (grid.right(row, col) > 0){
      positions.push(grid.stepRight(row, col))
      console.log('Right');
      // step(grid.stepRight(row, col))
   }




}

function insertGoals() {
   let temp = Math.floor(Math.random() * (n * n))
   let col = Math.floor(temp / n),
       row = temp % n
   grid.update(row, col, 50)
   finish = [row, col]
   console.log(row, col);

   temp = Math.floor(Math.random() * (n * n))
   row = Math.floor(temp / n),
   col = temp % n
   grid.update(row, col, -2)
   positions.push([row, col])

   if (grid.up(row,col))
      {grid.update(row-1,col,0)}
   if (grid.down(row,col))
      {grid.update(row+1,col,0)}
   if (grid.left(row,col))
      {grid.update(row,col-1,0)}
   if (grid.right(row,col))
      {grid.update(row,col+1,0)}
   console.log(row, col);
   // grid.print()
}

main()
// }
