//You're making a restaurant, so you need a menu. Make an array of three
//object literal items for dishes on your menu. Then make a constructor
// function and add 3 more items to your menu.

var menuItems = [
    {
    item: "pizza",
    amount: 8.99,
    description:"yummy pizza :p"
    }
]

var menuItems = [
    {
    item: "chicken",
    amount: 7.99,
    description:"some tasty chicken",
    }
]

var menuItems = [
    {
    item: "noodles",
    amount: 6.99,
    description:"limp noodles"
    }
]

function Menu (item, amount, description) {
    this.item = item;
    this.amount = amount;
    this.description = description;
}

menuItems.push(beef, grilledCheese, iceCream);


var beef = new Menu("burger", 99.78, "burger burger burger");
var grilledCheese = new Menu("Grilled Cheese", 8.78, "Melt in your mouth goodness");
var iceCream = new Menu("Ice Cream", 5.78, "Eat it before it melts!");

//menuItems.push(beef, grilledCheese, iceCream);
//
//console.log(menuItems);

//make a variable to connect array with list tiems in html
//var changeMenu = document.getElementById("menuItems1").innterHtml;
//take my items created in JS file and put them in the ul
//var a = [];

for(var i = 0; i < menuItems.length; i++) {
    document.getElementById("menuItems1").innerHTML += "<li>" + menuItems[i].item + menuItems[i].description
}

