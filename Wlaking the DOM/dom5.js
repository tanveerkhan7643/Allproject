let input = document.getElementById("username");
let btn = document.getElementById("btn");
let output = document.getElementById("output");

btn.addEventListener("click", function() {
  output.innerText = input.value; // input box ke text ko paragraph me dikhana
});
