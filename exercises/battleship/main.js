var readline = require("readline-sync");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function isShip() {
    var random = getRandomInt(1, 5);
    return random === 5;
};

function Location() {
    this.isShip = isShip();
    this.hit = false;
    this.display = "~";
};

function makeGrid() {
    var grid = [];
    for (var i = 0; i < 10; i++) {
        var row = [];
        for (var j = 0; j < 10; j++) {
            var newLocation = new Location();
            row.push(newLocation);
        }
        grid.push(row);
    }
    return grid;
}

var grid = makeGrid();
//console.log(grid);
var numShipsSunk = 0;

function userGuess() {
    var y = parseInt(readline.question("call an X cordinate between 1-10: ")) - 1;
    var x = parseInt(readline.question("call an y cordinate between 1-10: ")) - 1;
    while (x < 0 || x > 9 || y < 0 || y > 9) {

        var y = parseInt(readline.question("call an X cordinate: ")) - 1;
        var x = parseInt(readline.question("call an y cordinate: ")) - 1;
    }
    var guessedLoacation = grid[x][y];

    guessedLoacation.hit === true;
    if (guessedLoacation.isShip) {
        guessedLoacation.display = "X";
        numShipsSunk++;
        console.log("\n ****HIT!!**** \n");
    } else {
        guessedLoacation.display = "O"
        console.log("\n MISS!! \n");
    }

    return guessedLoacation.isShip;
}

while (numShipsSunk < 5) {
    userGuess();
}

console.log("you won")
