function myFunction() {
    var x = document.getElementById("forIcon");
    if (x.className === "nav-container") {
        x.className += " responsive";
    } else {
        x.className = "nav-container";
    }
}
