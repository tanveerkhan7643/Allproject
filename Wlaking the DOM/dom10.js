let count = 0; // initial value

let counter = document.getElementById("counter");
let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");

plusBtn.addEventListener("click", function() {
  count++; // count increase
  counter.innerText = count;
});

minusBtn.addEventListener("click", function() {
  count--; // count decrease
  counter.innerText = count;
});

