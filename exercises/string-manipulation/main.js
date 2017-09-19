var readline = require("readline-sync");

var name = readline.question("Hello there, what is your name?\n ");
console.log("Nice to meet you " + name + ", I am Hank.\n ");

var capName = name.toUpperCase();

var lastName = readline.question(name + " What's your last name?\n ");

var capLast = lastName.toUpperCase();

if (readline.keyInYN("Are you doing well today?\n ") === false) {
    console.log("I'm sorry to hear that " + capName + " " + capLast);
} else {
    console.log("Good I'm glad to hear that\n " + capName + " " + capLast);
};

var about = readline.question(name + " Tell me a little more about yourself.\n");

var length = console.log("The length of your last message was ", about.length + " characters long. \n");

var lastHalf = console.log("Here's the last half of what you just told me. \n" + about.substr(about.length/2));

var aboutLength = about.length + about.indexOf();

var indexOfAbout = readline.question("Choose from a number between 0 & " + aboutLength);
