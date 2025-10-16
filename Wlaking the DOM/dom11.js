let btn = document.getElementById("btn");
let img = document.getElementById("myImage");

let first = "drawImage.webp";
let second = "img_lights.jpg";

btn.addEventListener("click", function() {
  if (img.src.includes("img_lights.jpg")) {
    img.src = first;
  } else {
    img.src = second;
  }
});

