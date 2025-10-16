let btn = document.getElementById("btn");
let list = document.getElementById("myList");
let remove = document.getElementById("button")

btn.addEventListener("click", function() {
  // 1. Create a new <li> element
  let newItem = document.createElement("li");

  // 2. Add text inside it
  newItem.innerText = "New Item";

  // 3. Add it to the list
  list.appendChild(newItem);
});

button.addEventListener("click",function() {
    let last = list.lastElementChild;
    if(list) list.removeChild(last);
});

