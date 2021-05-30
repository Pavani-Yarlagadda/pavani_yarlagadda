var typed = new Typed('.animate', {
    strings: [
        "Pavani Yarlagadda",
        "a Student",
        "a Frontend developer",
        ],
        typeSpeed:50,
        backDelay: 900,
        backSpeed:50,
        loop:true
});
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav-bar") {
         x.className += " responsive";
        } 
    else {
        x.className = "nav-bar";
    }
}