
let btn = document.getElementById("btn")

btn.addEventListener("click",function() {
    let paras = document.querySelectorAll("p"); // Select the all <p> tag

    paras.forEach(el => {
        el.style.color = "yellow";
    });
});