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
const newCardList = document.querySelector('[data-js="new-questions-list"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("submit detected");
  //Form Data
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const question = data["textarea-question"];
  const answer = data["textarea-answer"];
  const tag = data["tag-input"];

  console.log(event.target);

  //New Card Elements --- DOM's
  const newCardListItem = document.createElement("li");
  const newCard = document.createElement("article");
  const newCardListItemQuestion = document.createElement("h2");
  const newCardListAnswerButton = document.createElement("button");
  const newCardListAnswer = document.createElement("p");
  const newCardListSvg = document.createElement("svg");
  const newCardListPath = document.createElement("path");
  const newCardListBookmark = document.createElement("div");
  const newCardTagList = document.createElement("ul");
  const newCardTagListItem = document.createElement("li");
  const newCardListBookmarkButton = document.createElement("button");

  //New Card Elements --- Classes
  newCardListItem.classList.add("card-list__item");
  newCard.classList.add("card");
  newCardListItemQuestion.classList.add("card__question");
  newCardListAnswerButton.classList.add("card__button-answer");
  newCardListAnswer.classList.add("card__answer");
  newCardListSvg.classList.add("bookmark__icon");
  newCardListBookmark.classList.add("card__button-bookmark");
  newCardTagList.classList.add("card__tag-list");
  newCardTagListItem.classList.add("card__tag-list-item");
  newCardListBookmarkButton.classList.add("bookmark");

  //New Card Elements --- text content
  newCardListItemQuestion.textContent = question;
  newCardListAnswer.textContent = answer;
  newCardTagListItem.textContent = tag;
  newCardListAnswerButton.textContent = "Show Answer";
  newCardListBookmarkButton.innerHTML = `   <svg
                                            class="bookmark__icon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewbox="0 0 24 24"
                                            >
                                            <path
                                                d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
                                            />
                                            </svg>`;

  //New Card --- Show Answer button
  newCardListBookmarkButton.setAttribute("aria-label", "bookmark");
  newCardListSvg.setAttribute("viewbox", "0 0 24 24");
  newCardListSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  //New Card --- Apending
  newCardList.append(newCardListItem);
  newCardListItem.append(newCard);
  newCard.append(newCardListItemQuestion);
  newCard.append(newCardListAnswerButton);
  newCard.append(newCardListAnswer);
  newCard.append(newCardListBookmark);
  newCardListBookmark.append(newCardListBookmarkButton);
  newCardListBookmarkButton.append(newCardListSvg);
  newCardListBookmarkButton.append(newCardListPath);
  newCard.append(newCardTagList);
  newCardTagList.append(newCardTagListItem);
});
