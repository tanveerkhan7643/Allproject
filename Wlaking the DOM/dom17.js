let body = document.getElementById("body");
let btn = document.getElementById("toggleBtn");

btn.addEventListener("click", function() {
  body.classList.toggle("dark-mode"); // toggle class add/remove karega

  if (body.classList.contains("dark-mode")) {
    btn.textContent = "☀️ Enable Light Mode";
  } else {
    btn.textContent = "🌙 Enable Dark Mode";
  }
});
