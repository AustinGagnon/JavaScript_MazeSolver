// import Math

class Grid2D {
   constructor(m, n) {
      this.row = m
      if (!n)
         n = m
      this.col = n
      this.grid = []

      for (var i = 0; i < m; i++) {
         let temp = []
         for (var j = 0; j < n; j++) {
            temp.push(1);
            // temp.push(Math.floor(Math.random() * 2));
         }
         this.grid.push(temp)
      }
   }

   genMaze = ()=>{

   }

   print = ()=>{
      console.log(this.grid);
   }

   peak = (m, n)=>{
      console.log(this.grid[m][n]);
      return this.grid[m][n]
   }

   left = (m, n)=>{
      if (m - 1 >= 0 && m < this.row && n >= 0 && n < this.col){
         return this.grid[m - 1][n]
      }
      return -1
   }

   stepLeft = (m, n)=>{
      if (m - 1 >= 0 && m < this.row && n >= 0 && n < this.col){
         this.grid[m - 1][n] = -3
      }
      return [m-1, n]
   }

   right = (m, n)=>{
      if (m + 1 < this.row && m > -1 && n >= 0 && n < this.col){
         return this.grid[m + 1][n]
      }
      return -1
   }

   stepRight = (m, n)=>{
      if (m + 1 < this.row && m > -1 && n >= 0 && n < this.col){
         this.grid[m + 1][n] = -3
      }
      return [m+1, n]
   }

   up = (m, n)=>{
      if (n - 1 >= 0 && n < this.col + 1 && m > -1 && m < this.row){
         return this.grid[m][n - 1]
      }
      return -1
   }

   stepUp = (m, n)=>{
      if (n - 1 >= 0 && n < this.col + 1 && m > -1 && m < this.row){
         this.grid[m][n - 1] = -3
      }
      return [m, n-1]
   }

   down = (m, n)=>{
      if (n + 1 < this.col && n > -1 && m > -1 && m < this.row){
         return this.grid[m][n + 1]
      }
      return -1
   }

   stepDown = (m, n)=>{
      if (n + 1 < this.col && n > -1 && m > -1 && m < this.row){
         this.grid[m][n + 1] = -3
      }
      return [m, n+1]
   }


   update = (m, n, val)=>{
      this.grid[m][n] = val;
   }
}
