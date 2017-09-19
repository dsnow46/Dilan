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

//var myArray = "jesus loves me this i know";
//
//function hello(a){
//    var blank = [];
//    for(i = 0; i < a.length; i += 1){
//        blank.push(a[i]);
//    }
//    console.log(blank.join(" "));
//}
//hello(myArray);

        
var myArray = [100, 101, 102, 1898, 103, 104, 99,]
var biggestNum = 0;

for(var i = 0; i < myArray.length; i++){
    if(myArray[i] > biggestNum){
        biggestNum = myArray[i];
    }
}
console.log(biggestNum);