var modalOpen = document.querySelector(".js-btn-callback");

var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");

modalOpen.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-show");
});
