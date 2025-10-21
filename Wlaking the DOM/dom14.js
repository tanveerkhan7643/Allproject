let button = document.querySelectorAll(".btn");

button.forEach(function(button) {
    button.addEventListener("click",function() {
         // Pehle sabhi cards se active class hatao
         document.querySelectorAll(".card").forEach(card => {
            card.classList.remove("active");
         });

         // 'closest' se parent .card element dhoondo
         let parentcard = button.closest(".card");
         parentcard.classList.add("active");  
    });
});
