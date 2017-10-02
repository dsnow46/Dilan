


//for(let i = 0; i < 10; i++) {
//    console.log("1st for loop: ", i);
//    for(let j = 0; i < 10; i++) {
//    console.log("2nd for loop: ", i);
//    }
//}

//const ages = [1, 2, 3, 45, 4, 5, 6]

//console.log(Math.max(...ages));



//const names1 = ["Nonnie", "Miley", "Brittney"];
//const names2 = ["Justin", "Harry", "Markymark"];
//
//const singers = [...names1, ...names2];
//
//console.log(singers);



//ARROW FUNCTIONS
//
//function addExcitement = function(name) {
//    return name + "!!!!!!!";
//}
//
//
//const speak = name => `${name}!!!!`;

//class BoyBandMembers {
//    constructor(name, hairStyle, hasTattoos, swagLevel) {
//        this.name = name;
//        this.hairStyle = hairStyle;
//        this.hasTattoos = hasTattoos;
//        this.swagLevel = swagLevel;
//    }
//    sing() {
//        console.log("LALALA my name is " + this.name);
//    }
//}
//
//const harry = new BoyBandMembers("Harry", "Long", true, 9);
//harry.sing();




class Player {
    constructor(name, totalCoins, status, star, gotHit, gotPowerup, gameActive, addCoin, print) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.star = star;
        this.gotPowerup = gotPowerup;
        this.gameActive = gameActive;
        this.addCoin = addCoin;
        this.print = print;
    }
    setName() {
        console.log("Name: " + this.name);
    }
    gotHit() {
        this.status = ["Power Up", "Big", "Small", "Dead"];
            for(var i = 0; i < this.status.length; i++)
                if(gotHit === true) {
        }
    }
}

const mario = new Player("Mario", 10, "Powered UP", false);
const luigi = new Player("Luigi", 10, "Powered UP", false);
//mario.setName();
//luigi.setName();
//console.log(mario)

console.log(mario)















