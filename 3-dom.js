
var heading = document.getElementById("myHeading");

var button = document.getElementById("myButton");

var isTextColorRed = true;

button.addEventListener("click", function() {
    if (isTextColorRed) {
        heading.style.color = "green";
    } else {
        heading.style.color = "red";
    }
    isTextColorRed = !isTextColorRed;
});