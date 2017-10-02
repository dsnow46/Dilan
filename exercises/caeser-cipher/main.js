var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ');
var shift = parseInt(readline.question('How many letters would you like to shift? '));

function caeser(input) {

    var characters = input.split("");

    return characters.map(function (letter) {
        letter = letter.charCodeAt();

        if (letter >= 97 && letter <= 109) {
            letter += shift;
        } else if (letter >= 110 && letter <= 122) {
            letter -= shift;
        } else if (letter >= 65 && letter <= 77) {
            letter += shift;
        } else if (letter >= 78 && letter <= 90) {
            letter -= shift;
        }

        return String.fromCharCode(letter);
    }).join("");
}

console.log(caeser(input, shift));


