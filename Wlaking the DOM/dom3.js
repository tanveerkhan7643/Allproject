let box = document.getElementById("box");

box.addEventListener("mouseover",function() { // When mouse come on the box changing background color
    box.style.backgroundColor = "red";
});

box.addEventListener("mouseout",function() { // When mouse out to the box to reset background color
    box.style.backgroundColor = "";
})