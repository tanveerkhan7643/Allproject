let form = document.getElementById("myForm");

form.addEventListener("submit",function(event) {
    event.preventDefault(); // It is stop to reload the page

      // input values get karte hain
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;

    alert(`Name: ${name}\nEmail: ${email},\nAge: ${age}`)
});