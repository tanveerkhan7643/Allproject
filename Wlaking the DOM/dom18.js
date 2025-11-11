let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  let taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // create new list item
  let li = document.createElement("li");
  li.textContent = taskText;

  // ✅ mark complete on click
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // ❌ delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = ""; // clear input
});
