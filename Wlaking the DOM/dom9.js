let img = document.getElementById("myImage");
let btn = document.getElementById("btn");

btn.addEventListener("click",function() {
    if(img.style.display === "none") {
        img.style.display = "block";
        btn.innerText = "Hide image"
    }else{
        img.style.display = "none";
        btn.innerText = "Show image";
    }
});