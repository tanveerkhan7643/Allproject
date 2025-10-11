let para = document.getElementById("text");
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  para.innerText = "This is the new text after clicking!";
});

