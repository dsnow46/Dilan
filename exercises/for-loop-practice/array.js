var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  

 vegetables.pop();                                      
     fruit.shift();                                         

   var index = fruit.indexOf("orange");                   
                                                          
    fruit.push(index);                                                                                               
    vegetables.push(vegetables.length);        
    
   var food = fruit.concat(vegetables);

   food.splice(4,2);
    food.reverse();




console.log(food.join(" "));