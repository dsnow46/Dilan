//function add(a, b) {
//    return a + b;
//}
//
//
//function subtract(a, b) {
//    return a - b;
//}
//
//function multiply(a, b) {
//    return a * b;
//}
//
//function divide(a, b) {
//    return a / b;
//}
//
//function validIp(str) {
//    if(str.length < 14) {
//        str === false;
//    } else(str.value < 255) {
//        str === false;
//    }
//}
//
function parentheses(str) {
   if(str.indexOf(0) === "("){
       str === true;
   }else if(str.indexOf(-1) === ")"){
       str === true;
   }else {
       return false;
   }
}

module.exports = {
    parentheses: parentheses,
}

//
//
//module.exports = {
//    add: add,
//    sub: subtract,
//    mult: multiply,
//    div: divide, 
//    validIp: validIp,
//};

//function firstThree(str, n){
//  let newString = str.slice(0, 3);
//    return newString.repeat(n)
//}
//
//
//console.log(firstThree("hello", 7));


