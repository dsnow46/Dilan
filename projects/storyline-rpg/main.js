//character creation
//walking
//running from a fight
//enemy creation
//attacking enemy
//enemy attacking
//enemy dying
//character dying

var readline = require("readline-sync");

var playerCreation = function (attack, health, name) {
    this.health = health;
    this.attack = attack;
    this.name = name;
};

var badGuy = function (attack, health, name, item) {
    this.attack = attack;
    this.health = health;
    this.name = name;
    this.item = item;
};

var theThing = new badGuy(25, 200, "Thing", "potion")
var experiment626 = new badGuy(200, 200, "Experiment 626", "strength")
var kremlin = new badGuy(1200, 250, "Gorbachev", "potion")


var name = readline.question("Welcome to Earth Space Agency,  please state your name. \n");

var player = new playerCreation(250, 450, name);
//
//if (readline.keyInYN("Step into the ship to start your mission. \n") === false) {
//    console.log("Come back to the Space Agency when you are ready...")
//    process.exit();
//} else {
//    console.log(player.name + " " + "Glad you're feeling brave, lets go.\n")
//}
//
//var intro = readline.keyInPause("Okay, here's you mission... \n you'll be going to the Andromeda Galaxy. From there you'll be going to the planet KELT-1b. Mikhail Gorbachev has been living there for the past 26 years. During this time he has built an army of Graviton Manipulation robots. If you fail your mission, not only is earth at stake but the entire Milky Way Galaxy will be destroyed. You see... \n his new generation of soliders are strong enough to crash their galaxy into our. Resulting in the total enilation of life as we know it. \n")
//
//
//var weapon = ["Ray Gun", "Thunder Gun", "FN FAL", "Cymbal Monkies"], 
//    weaponChoice = readline.keyInSelect(weapon, "Please choose your desired weapon.\n");
//console.log(player.name + " you have selected the " + weapon[weaponChoice] + " " + "use it wisely.\n" + "\nYour attack level is at " + player.attack + "." + "\nYour health is at " + player.health);
//
//
//
//function start() {
//    var fly = readline.question(name + " lets start your mission press 'F' to being flight\n")
//    if (fly === "f") {
//        console.log(name + " threw the lever in full force to fire up the rockets. With " + weapon[weaponChoice] + " in hand. Ready to take on Mr. Gorbachev and his army. " )
//    } else {
//        console.log("You we're shot dead by Space Agency's commander in chief...\n You signed up for this")
//        process.exit();
//    }
//};
//start();
//
//
//readline.keyInPause("You've made it to the Andromeda Galaxy, KELT-1b is near. to get there you'll have to pass a few obstacles to complete your mission. \n")

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function walk() {
    var walk = readline.question("Would you like to walk? If yes, please press 'W' to do so. ")
    if (randomNum(1, 10) < 5) {
        return console.log("\nThere are no enemys in sight. You're safe for now. \n");
    } else(randomNum(1, 10) > 5)
    return console.log("\Prepare for battle. \n" + "Your health is at " + player.health) + fight();
}
walk();

var selectedBadGuy;

function fight() {
    if (randomNum(1, 4) === 1) {
        selectedBadGuy = theThing;
        return console.log("You're fighting The " + theThing.name) + attackEnemy();
    } else if(randomNum(1, 4) === 2){
        selectedBadGuy = experiment626;
        return console.log("You're fighting " + experiment626.name) + attackEnemy();
    } else (randomNum(1, 4) === 3)
        selectedBadGuy = kremlin;
        return console.log("You're fighting " + kremlin.name) + attackEnemy();
}

function attackEnemy() {
    //during a fight if the player enters "a" have the character attack with a random hit power
    var attack = readline.question("Press 'A' to attack your enemy! \n");
    if (attack === "a") {
        console.log("\nYou attacked " + selectedBadGuy.name + " with " + player.attack + " attack points!\n");
        console.log("Your enemy has \n");
        var currentHealth = selectedBadGuy.health - player.attack;
        console.log(currentHealth);
        console.log("\nhealth points left!");
    }
    if(selectedBadGuy.health > 0){
       enemyAttack();
        walk();
    } else
        enemyDie();
  
}

function enemyAttack() {
    console.log("\n" + selectedBadGuy.name + " attacked you! \n")
    console.log("You have ")
    var currentHealth = player.health - selectedBadGuy.attack;
    console.log( player.health + " health points left!")
    if(player.health <= 0){
        playerDie();
    }
}



function playerDie() {
    console.log("Game Over!")
}

function enemyDie() {
    console.log("enemy died!")
}

//
//
//
//
//console.log(randomNum());

//function randomNum () {
//    var num = Math.floor(Math.random() * 11);
//    
//    if(num > 5){
//    return console.log("1");
//    } else (num < 5)
//    return console.log("2");
//};
//
//randomNum();
//Player Function
//var players = function(attack, health){
//	this.health = health;
//	this.attack = attack;
//};
//
////Make Player Here
//var player = new players(50, 1000);
//
////Monster Function
//var monsters = function(attack, health){
//	this.health = health;
//	this.attack = attack;
//};
//
////Make Monsters Here
//var dragon = new monsters(100, 200);
//var goblin = new monsters(25, 500);
//var wizard = new monsters(200, 50);
//
////Make String Names Here
//var names;
//
////Make randomnumber Here
//var randomnumber = Math.floor(Math.random(10)*10);
//
////Make selectedmonster Here
//var selectedmonster;
//if (randomnumber >= 0 && randomnumber < 3){
//	selectedmonster = dragon;
//	names = "dragon";
//}
//else if (randomnumber > 3 && randomnumber < 6){
//	selectedmonster = goblin;
//	names = "goblin";
//}
//else if (randomnumber > 6){
//	selectedmonster = wizard;
//	names = "wizard";
//}
////Battle Script
//var monsterdead = 0;
//var playerdead = 0;
////player goes first, playerturn = 1
//var playerturn = 1;
//var monsterturn = 0;
//while (monsterdead === 0 || playerdead === 0){
////Player's Turn
//while (playerturn == 1){
//	//Write Player Attack Script	
//}
////Monster's Turn
//while (monsterturn == 1){
//	//Write Monster Attack Script	
//}
////When Monster Dies
//if (selectedmonster.health <= 0){
//	
//}
////When Player Dies
//if (player.health <= 0){
//	
//}
//}