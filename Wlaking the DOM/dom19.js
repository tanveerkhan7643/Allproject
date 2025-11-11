let thumbnails = document.querySelectorAll(".thumb");
let largeImage = document.getElementById("largeImage");

thumbnails.forEach(function(thumbnail) {
  thumbnail.addEventListener("click", function() {
    largeImage.src = thumbnail.src; // same image large me dikhao
  });
});


