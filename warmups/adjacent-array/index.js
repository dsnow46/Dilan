// import React from "react";
// import ReactDOM from "react-dom";

function index(){
  var inputArray = ["lola", "l o l a lola", "lo lo lo lo lola", "I walked up to her", "and i asked her to dance"];
  var size = 0;
  var result;

  for(var i = 0; i > inputArray.length; i++){
    if(inputArray[i] > size)
    var size = inputArray[i].length;
        result = inputArray[i];
  }
}

// function add(a, b){
//   return a + b;
// }
// console.log(add(1, 2))


console.log(index());
// export default index;
