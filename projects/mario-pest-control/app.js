
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


document.getElementById("button").addEventListener("click", function () {
    var cheepCount = document.getElementById("cheep-total").innerHTML;
    var bobCount = document.getElementById("bob-total").innerHTML;
    var goombaCount = document.getElementById("goomba-total").innerHTML;
    
var total = parseInt(~~cheepCount) + parseInt(~~bobCount) + parseInt(~~goombaCount);
    document.getElementById("total").innerHTML = total  
});
