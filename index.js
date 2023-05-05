//JS for index.html

const bookmarkButton = document.querySelector('[data-js="bookmark"]');
const toggleAnswerButton = document.querySelector(
  '[data-js="card__button-answer--toggle"]'
);
const cardAnswer = document.querySelector('[data-js="card__answer--toggle"]');

//Toggle First Bookmark
bookmarkButton?.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

//Toggle Show-Answer Button
toggleAnswerButton?.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer--active");
});

//JS for form.html

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("submit detected");
});
