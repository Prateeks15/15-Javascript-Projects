"use strict";

// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
var modalBtn = document.querySelector(".modal-btn");
var modal = document.querySelector(".modal-overlay");
var closeBtn = document.querySelector(".close-btn");
modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});