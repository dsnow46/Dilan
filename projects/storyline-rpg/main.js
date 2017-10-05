//character creation
//walking
//running from a fight
//enemy creation
//attacking enemy
//enemy attacking
//enemy dying
//character dying

var readline = require("readline-sync");

console.log("Welcom to Bar Fight. A simulated version of an actual bar fight! You're a raging alcoholic and refuse to take shit from no one. After a week long bender you wake up to find yourself in Skagway Alaska. Lucky you... These folks don't take too kindly to outsiders. Select your drunk ");

var characters = [
    {
        name: "Dave",
        drinkingPower: 1,
        speed: 2
    },
    {
        name: "Jim",
        drinkingPower: 2,
        speed: 3
    },
    {
        name: "Billy",
        drinkingPower: 3,
        speed: 2
    }
]

var players = [characters[0].name, characters[1].name, characters[2].name];
var player = readline.keyInSelect(players);

console.log("Hello " + players[player] + " you are truly a lowlife. Where do you want to take you broken life next?  ");

var health = 500;
var items = [];

while (health > 0 && exit !==  true) {
    walk();

     function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function walk() {
        var choices = ["Saloon", "Tent City", "Underneath the over pass", "Check your pockets"];
        var select = readline.keyInSelect(choices, "Which garbage venue are you heading to next?")
        if (select === 0) {
            saloon();
        } else if (select === 1) {
            tentCity();
        } else if (select === 2) {
            overPass();
        } else if (select === 3) {
            pockets();
        } else {
            exit();
        }
    }

    function pockets() {
        if (items.length === 0) {
            console.log("You've got nothing in your pockets. Your life is a complete disaster. Maybe stop boozing and pay your child support")
        } else {
            console.log("You have " + items + ". Press 1 to choke it down scumbag!");
            var drinkItem = readline.keyInSelect(items, "Dink this item too temporarily boost your health! ");
            if (drinkItem >= 0) {
                items.splice(drinkItem, 1);
                health += 125;
                console.log("You drank, your health is now!" + health);
            }
        }
    }

    function saloon() {
        if (randomNum(1, 4) === 1) {
            return console.log("You found a 5th of whisky... DRINK UP!"), items.push("Whisky"), walk();
        } else {
            return console.log("You were caught reaching behind the counter. Susan the bartender didn't like that. GHet ready for a fight!"), fight();
        }
    }

    function tentCity() {
        if (randomNum(1, 4) === 1) {
            return console.log("You found some expired canned soup!"),
                items.push("The saddest soup!"), walk();
        } else {
            return console.log("You ran into a pack of wild dogs, you smell like food and look like it too. Get ready to fight these rabid beasts!"), fight();
        }
    }
    
    function overPass() {
        if (randomNum(1, 4) === 1) {
            return console.log("You found yourself a gallon of Taka!"),
                items.push("Shitty vodka"), walk();
        } else {
            return console.log("Here comes Buddy, you probably dont remember him because your always blacked out but you did him wrong! Did you mouth write a check your ass couldn't cash? Probably, Get ready to fight!"), fight();
        }
    }

    function fight() {
        var run = ["Book it", "Tussle"];
        var playerRun = readline.keyInSelect(run, "Do you want to Book it or Tussle?")

        if (playerRun === 0) {
            return runAway();
        } else {
            return attack();
        }
    }

    function runAway() {
        if (randomNum(characters[player].speed, 4) === characters[player].speed) {
            return console.log("You stumbeled away in your drunken glory. You live to drink another day!"), walk();
        } else {
            return console.log(" You didn't get away! Yeah your hurt. Not as bad as your liver probably is but you're still pretty messed up. Mentally and physically!"), enemyAttack();
        }
    }

    function enemyAttack() {
        if (health > 126) {
            return health = health - 125, console.log("Health: " + health);
        } else {
            return health = health - 125, console.log(health + " Either your liver gave out or you got the hell kicked outta you. Either way, it's a one way ticket to davey jones locker for you old sailor")
        }
    }

    function attack() {
        if (randomNum(characters[player].drinkingPower, 4) === characters[player].drinkingPower) {
            health += 50; 
            console.log("Kickin ass and taking names! Good job! You gained 50 health points! your health is now at " + health);
        } else {
            console.log("Your fragile body can't take much more of this shit. "), enemyAttack();
        }
    }

    function exit() {
        var exit = readline.keyInYN("Quit game?");
        if (exit === true) {
            console.log("GAME END!")
        } else if (exit === false) {
            walk();
        } else {
            consoe.log("Please press Y or N")
        }
    }
}