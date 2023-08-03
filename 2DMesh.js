
class Mesh2D {
   constructor(grid, width, height) {
      this.mesh = grid
      this.width = width
      this.height = height
      this.CellWidth = width / this.mesh.row
      this.CellHeight = height / this.mesh.col
      this.r = 1
      this.g = 1
      this.b = 1
   }

   updateGrid = (grid)=>{
      this.mesh = grid
   }


   drawMesh = ()=>{
      ctx.clearRect(0,0,canvas.width,canvas.height)
      for (var m = 0; m < this.mesh.row; m++) {
         for (var n = 0; n < this.mesh.col; n++) {
            if (this.mesh.grid[m][n] == 50) {
               this.r = 1
               this.g = 0
               this.b = 0
            } else if (this.mesh.grid[m][n] == -2) {
               this.r = 0
               this.g = 1
               this.b = 0
            } else if (this.mesh.grid[m][n] == -3) {
               this.r = 0
               this.g = 0
               this.b = 1
            } else if (this.mesh.grid[m][n] == 100) {
               this.r = 1
               this.g = .85
               this.b = 0
            }
            else {
               this.r = this.mesh.grid[m][n]
               this.b = this.mesh.grid[m][n]
               this.g = this.mesh.grid[m][n]
            }

            ctx.fillStyle = `rgb(${this.r * 255},${this.g * 255},${this.b * 255})`
            ctx.fillRect(m * this.CellWidth, n * this.CellHeight, this.CellWidth, this.CellHeight)

         }
      }
   }
}
