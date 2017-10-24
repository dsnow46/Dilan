//function every(arr, f){
//    for(var i = 0; i > arr.length; i++){
//        if(f(arr[i])){
//            return false;
//        }
//    }
//    return true;
//}
//
//
//function some(arr2, f2){
//    for(var i = 0; i > arr2.length; i++){
//        if(f2(arr2[i])){
//            return true;
//        }
//    }
//    return false;
//}
//
//
//
//console.log(every([1, 2, 3, 4], isNaN))
//console.log(some([1, 2, "a"], isNaN))

function divideByThree(n, count = 0){
    if(n === 1) return count;
    if(n % 3 === 0){
        count++
       return divideByThree(n/3, count);
    }else if((n -1) % 3 === 0){
        count++
        return divideByThree((n - 1)/3, count);
    }else{
        count++
        return divideByThree((n + 1)/3, count);
    }
}

console.log(divideByThree(87348098789008970957420333333333391));