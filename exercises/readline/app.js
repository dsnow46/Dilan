function makeForm() {
    var firstName = document.getElementById("travelForm").elements.firstname.value;

    var lastName = document.getElementById("travelForm").elements.lastname.value;

    var male = document.getElementById("travelForm").elements.male.value;

    var female = document.getElementById("travelForm").elements.female.value;

    var location = document.getElementById("travelForm").elements.location.value;

    var meal = document.getElementById("travelForm").elements.meal.value;
    
    document.getElementById("list").innerHTML = firstName + " " + lastName + " " + male + " " + female + " " + location + " " + meal;
};