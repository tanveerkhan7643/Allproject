let input = document.getElementById("myInput");
let output = document.getElementById("output");

input.addEventListener("input",function() {
    output.innerText = input.value;
});
