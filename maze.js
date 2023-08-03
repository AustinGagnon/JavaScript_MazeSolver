class Maze {

   constructor(grid) {
      // console.log(grid);
      // this.grid = grid

      this.grid = grid
      // this.segment = []
      let hopper = [0,1,0]






   }

   construct = (segment)=>{
      let seg = []
      if (!segment)
         segment = [[0,0,0],
                    [1,1,0],
                    [0,1,1]]
      seg = segment

      for (let i = 0; i < this.grid.length; i += 3) {
         for (let j = 0; j < this.grid[i].length; j += 3){

            this.grid[i][j] = seg[0][0]
            this.grid[i][j+1] = seg[1][0]
            this.grid[i][j+2] = seg[2][0]
            this.grid[i+1][j] = seg[0][1]
            this.grid[i+1][j+1] = seg[1][1]
            this.grid[i+1][j+2] = seg[2][1]
            this.grid[i+2][j] = seg[0][2]
            this.grid[i+2][j+1] = seg[1][2]
            this.grid[i+2][j+2] = seg[2][2]

            seg = getSeg()
         }
      }

      // for (let i = 0; i < this.grid.length; i++) {
      //    for (let j = 0; j < this.grid[i].length; j += 3){
      //       // this.grid[i].length
      //       // console.log(seg[0]);
      //       this.grid[i][j] = seg[0]
      //       this.grid[i][j + 1] = seg[1]
      //       this.grid[i][j + 2] = seg[2]
      //       seg = getSegment(seg)
      //    }
      // }
   }

   getGrid(){
      return this.grid
   }
}


function getSeg() {

   let newArr = [
                   [
                      [0,0,1],
                      [1,1,1],
                      [1,0,0]
                   ],[
                      [1,0,0],
                      [0,1,1],
                      [0,1,0]
                   ],[
                      [0,1,0],
                      [1,1,1],
                      [0,1,0]
                   ],[
                      [0,1,1],
                      [1,0,0],
                      [1,1,1]
                   ],[
                      [0,0,0],
                      [1,1,0],
                      [0,1,1]
                   ]
                ]

   return newArr[Math.floor(Math.random() * newArr.length)]
   // console.log(newArr[Math.floor(Math.random() * newArr.length)]);
   // return newArr[Math.floor(Math.random() * newArr.length)]
}





// function getSegment(prev) {
//    let total = 0,
//        temp = []
//    for (x of prev){
//       total += x
//    }
//    console.log(total);
//    // if (total == 0 ) {
//    //    return [0,0,0]
//    // }
//    if (total == 1) {
//       for (x of prev) {
//          if (x == 1) {
//             temp.push(x)
//          }
//          else {
//             temp.push(Math.floor(Math.random() * 2))
//          }
//       }
//       return temp
//    }
//    else if (total == 2) {
//       // temp = [0,0,0]
//       temp = [Math.floor(Math.random() * 3),Math.floor(Math.random() * 3),Math.floor(Math.random() * 3)]
//       rand = Math.floor(Math.random() * 3)
//       while (prev[rand] == 1){
//          rand = Math.floor(Math.random() * 3)
//       }
//       temp[rand] = 1
//       return temp
//    }
//    else if (total == 3){
//       return [0,0,0]
//    }
//    else {
//       // return [Math.floor(Math.random() * 2),Math.floor(Math.random() * 2),Math.floor(Math.random() * 2)]
//       return [1,1,0]
//    }
// }
