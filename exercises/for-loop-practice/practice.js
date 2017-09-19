

//for (var i = 0; i < 1000000000000000000000000000000000001; i++) {
//    console.log(i);
//}

//for (var i = 101; i > 0; i--) {
//    console.log(i);
//}

//for (var i = 0; i < 101; i+=2) {
//    console.log(i);
//}

//for (var i = 101; i > 0; i-=2) {
//    console.log(i);
//}


//powerRangers.splice(0, 1);
//console.log(powerRangers);

//


//============================================================================================================9/8/17
//============================================================================================================
//============================================================================================================
//============================================================================================================
//============================================================================================================

//function add (a, b) {
//    return a + b;
//}
//
//var sum = add(1290, 28918);
//console.log(sum);


//var myArray = [ 9, 2, 8, 1902];
//var biggestSum = 0;
//
//for (var i = 0; i < myArray.length; i++){
//    biggestSum = myArray[i];
//}
//
//console.log(biggestSum);

//function isEven(34) {
//    if (34 % 2 === 0)
//        return true
//}

//var lyrics = ["This ", "hit ", "that ", "ice ", "cold ",  
//             "Michelle ", "Pfeiffer ", "that ", "white ", 
//              "gold ", "This ", "one ", "for ", "them ", 
//              "hood ", "girls ", "Them ", "good ", "girls ", 
//              "straight ", "masterpieces ", "Stylin' ", 
//              "whilen' ", "livin' ", "it ", "up ", "in ", 
//              "the ", "city ", "Got ", "Chucks ", "on ", 
//              "with ", "Saint ", "Laurent ", "Gotta ", "kiss ", 
//              "myself ", "I'm ", "so ", "pretty "];
//
//
//
//
//function printEveryOther(arr) {
//    var everyOtherLyric = [];
//    
//    for (var i = 0; i < arr.length; i += 2) {
//        everyOtherLyric.push(arr[i]);
//    }
//    
//    console.log(everyOtherLyric.join(" "))
//}
//
//printEveryOther(lyrics);

//var ham = ["ham", "pork", "bacon", "BBQ"];
//
//for (var i = 0; i < ham.length; i++) {
//    console.log(ham[i]);
//}

//var string = Math.random().toString(36).slice(-8);
//
//
//
//console.log(string);

//function pass(num) {
//  var text = "";
//  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
//
//  for (var i = 0; i < num; i++)
//    text += possible.charAt(Math.floor(Math.random() * possible.length));
//
//  return text;
//}
//
//console.log(pass(8));



//function myString (str, letter) {
//    for (var i = 0; i < str.length; i++)
//        if (letter === str[i]) {
//            console.log("found letter")
//            return;
//        } else {
//            console.log("didnt find")
//            return;
//        }
//            
//        
//}
//
//myString("heyeheyeheyehyehey", "h")


//***********USING forEach ON AN ARRAY TO LOOP THROUGH EVERY ITEM IN THE ARRAY*********
//var cars = ["truck", "van", "sedan"];
//
//cars.forEach(function(car){
//    console.log(car + " goes vroom!");
//});


var cars = [  
    {make: "Ford", model: "E150", price: 10000, year: 2010},
    {make: "Chevy", model: "Camaro", price: 20010, year: 2001},
    {make: "Toyota", model: "Tacoma", price: 30900, year: 2006},
    {make: "Ford", model: "Explorer", price: 9000, year: 2003},
    {make: "Ford", model: "F250", price: 2400, year: 2015},
];
//USING FILTER() TO MAKE A SMIPLER IF STATEMENT******************
//var a = cars.filter(function(car){
//    return car.year > 2005;
//});
//
//console.log(a);
//USING FIND() TO MAKE A SIMPLER IF STATEMENT TO FIND THE CAR MODEL****************
//var a = cars.find(function(car){
//    return car.model === "E150";
//});
//console.log(a);
//USING SOME() & EVERY() AS A TRUE/FALSE STATEMENT ON EVERY MODEL IN THE CARS ARRAY**************
//var a = cars.some(function(car){
//    return car.model === "E150";
//});
//console.log(a);

//var a = cars.every(function(car){
//    return car.model != "E150";
//});
//console.log(a);

