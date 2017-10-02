var readline = require("readline-sync");

function createArray(amount){
    var arr = [];
    for(var i = 0; i < amount; i++) {
        var zeros = [];
        for(var j = 0; j < amount; j++){
            zeros.push("O");
            arr.push(zeros);
        }
        return arr;
    }   
}
var grid = createArray(5);

console.log(grid);

var y = parseInt(readline.question("Enter Y: ")) -1;
var x = parseInt(readline.question("Enter X: ")) -1;

grid[x][y] = grid[x][y] = "X";


console.log(grid);