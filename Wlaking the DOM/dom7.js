let btn = document.getElementById("btn");
let button = document.getElementById("button");
let text = document.getElementById("text");

btn.addEventListener("click",function() {
    text.style.display = "none";
});

button.addEventListener("click",function() {
    text.style.display = "block" // Element are visible
});