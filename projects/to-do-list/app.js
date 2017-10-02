//document.getElementById("add-todo").addEventListener("click", function (){
//    var newTodoText = document.getElementById("new-todo-text");
//    var list =  document.getElementById("todo-list");
//    
//    //low level way of creating elements
////    var newLi = document.createElement("li");
////    document.getElementById("todo-list").appendChild(newLi);
////    var todoTextNode = document.createTextNode(newTodoText);
////    newLi.appendChild(todoTextNode);
//    //easier way
//    
//    list.innerHTML += "<li>" + newTodoText.value + "</i>";
//    newTodoText.value = "";
//    newTodoText.focus();
//});


var chance = Math.random(Math.floor())* 100;

if (chance > 50){
    console.log("1");
} else {
    console.log("2")
}

console.log(chance);