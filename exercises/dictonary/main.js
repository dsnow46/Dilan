
var readline = require("readline-sync");

var wordResponse = "";
var definitionResponse = "";

var dicionary = {};

while(wordResponse !== "q" || definitionResponse !== "q"){
    var wordResponse = readline.question("What word would you like to enter? type 'q' to quit \n")
        if(wordResponse === "q") {
            break
        };
    
    var definitionResponse = readline.question("What's the definition to that word? type 'q' to quit \n")
    
    if(dicionary[wordResponse]=== undefined) {
        var definitionResponse = readline.question("What's the definition to that word? type 'q' to quit \n")
        dicionary[wordResponse] = definitionResponse;
    }else {
        console.log(dicionary[wordResponse]);
    }
}

