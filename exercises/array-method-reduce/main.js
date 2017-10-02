function total(arr) {
    return arr.reduce(function (sum, value) {
        return sum + value;
    }, 0);
}

console.log(total([1, 2, 3])) // 6  


function stringConcat(arr) {
    return arr.reduce(function (sum, value) {
        return sum + value;
    }, "");
}

console.log(stringConcat([1, 2, 3]));

var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

var total = voters.reduce(function(previous, vote){
    if(vote.voted === true) previous.voted++
    return previous;
}, {voted: 0});

console.log(total);

var wishlist = [  
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

var amount = wishlist.reduce(function(previous, total){
    
})

var total = voters.reduce(function(previous, vote){
    if(vote.voted === true) previous.voted++
    return previous;
}, {voted: 0});


function flatten(arr) {
    return arr.reduce(function(flattened, curr){
        return flattened.concat(curr);
    }, []);
}

var arrays = [  
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];








