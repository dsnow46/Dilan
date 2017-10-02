function makeForm() {
    var form = document.getElementById("travelForm");
    var txt = "";
    
    for(i = 0; i < form.length; i++) {
        txt = txt + form.elements[i].value + "<br>";
    }
    alert(document.getElementById("list")).innerHTML = txt;
   
};
