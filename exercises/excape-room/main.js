var readline = require("readline-sync");

var name = readline.question("Hello and welcome to the Escape Room. What's you name? \n");

if (readline.keyInYN(name + " " + "There is a hole in the wall. Do you want to put your hand in and see if there is a key?\n ")=== false){
    console.log("\n Good choice that hole was filled with black widows and rattlesnakes \n")
} else {
    console.log("Wrong move, you have died. To escape this room start again... ")
    process.exit();
}

var phrase = readline.keyInPause("\nNow that we have that out of the way, you have a few more options. \n");

if (readline.keyInYN(name + " " + "Would you like to scream for help?\n ")=== false){
    console.log("\n Good choice, nobody likes a whiner \n")
} else {
    console.log("Wrong move, you have died. ")
    process.exit();
}

var phrase2 = readline.keyInPause("\nLets try another approach...\n")

if (readline.keyInYN(name + " " + "Would you like to check the trunk in the corner?\n ")=== false){
    console.log("\n Not there, lets continue\n")
} else {
    console.log("You have died. ")
    process.exit();
}

var phrase3 = readline.keyInPause("\n You're almost there, let's try something new...\n")

if (readline.keyInYN(name + " " + "Lets try the book?\n ")=== true){
    console.log("\n You found the key!\n")
} else {
    console.log("You have died. ")
    process.exit();
}

if (readline.keyInYN(name + " " + "Put the key in the door to leave room!\n ")=== true){
    process.exit();
} else {
    console.log("Okay, you can stay here for eternity ")
    process.exit();
}

    

    