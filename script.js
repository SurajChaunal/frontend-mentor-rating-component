const submitBtn = document.querySelector(".submit--btn");
const ratingBtns = document.querySelectorAll(".btn");
const sectionOutput = document.querySelector(".section--output");
const sectionInput = document.querySelector(".section--input");
const btnContainer = document.querySelector(".btn--container");
const ratingEl = document.querySelector(".rating");
const errorEl = document.querySelector(".error-msg");
let selectedRating;

function checkError() {
  if (!selectedRating) {
    errorEl.textContent = "*No rating selected";
    errorEl.classList.add("active");
    return true;
  }
  errorEl.textContent = "";
  errorEl.classList.remove("active");
  return false;
}

function handleSubmit() {
  if (checkError()) return;
  ratingEl.textContent = selectedRating;
  sectionInput.classList.remove("active");
  sectionOutput.classList.add("active");
}

function handleRating(e) {
  if (!e.target.classList.contains("btn")) return;

  ratingBtns.forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");
  selectedRating = e.target.dataset.rating;
}

btnContainer.addEventListener("click", handleRating);
submitBtn.addEventListener("click", handleSubmit);
