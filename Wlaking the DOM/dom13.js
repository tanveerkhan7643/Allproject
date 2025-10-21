let items = document.querySelectorAll("#menu li");

items.forEach(function(item) {
    item.addEventListener("click",function() {
         // Remove the "active" in items
         items.forEach(li => li.classList.remove("active"));

         // Add the "active" class in clicked items
         item.classList.add("active");
    });
});