//var cheepTotal = cheepCount * cheepPrice;
// var bobTotal = bobCount * bobPrice;
// var goombaTotal = goombaCount * goombaPrice;
//
//var goombaCount = parseInt(document.getElementById("goomba-count").value);
//var bobCount = parseInt(document.getElementById("bob-count").value);
//var bobCount = parseInt(document.getElementById("bob-count").value);


var goombaPrice = parseInt(document.getElementById("goomba-price").innerHTML);

document.getElementById("goomba-count").addEventListener("input", function goomba () {
    var goombaCount = parseInt(document.getElementById("goomba-count").value);
    var goombaTotal = goombaCount * goombaPrice;
    document.getElementById("goomba-total").innerHTML = goombaTotal
});



var bobPrice = parseInt(document.getElementById("bob-price").innerHTML);




document.getElementById("bob-count").addEventListener("input", function bob () {
    var bobCount = parseInt(document.getElementById("bob-count").value);
    var bobTotal = bobCount * bobPrice;
    document.getElementById("bob-total").innerHTML = bobTotal
});



var cheepPrice = parseInt(document.getElementById("cheep-price").innerHTML);



document.getElementById("cheep-count").addEventListener("input", function cheepcheep () {
    var cheepCount = parseInt(document.getElementById("cheep-count").value);
    var cheepTotal = cheepCount * cheepPrice;
    document.getElementById("cheep-total").innerHTML = cheepTotal
});

//document.getElementById("total").addEventListener(function (){
//    var overallTotal1 = parseInt(document.getElementById"cheep-count").value);
//    var overallTotal2 = parseInt(document.getElementById"bob-count").value);
//    var overallTotal3 = parseInt(document.getElementById"goomba-count").value);
//    
//    var total = overallTotal1 + overallTotal2 +overallTotal3;
//    
//    document.getElementById("cheep-total").innerHTML = total;
//    
//})
//

