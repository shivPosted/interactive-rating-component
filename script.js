"use-strict";

const ratingScore = document.querySelector(".rating-score");
const updateRating = document.querySelector(".display-rating");
const landingCard = document.querySelector(".rating-main");
const submitCard = document.querySelector(".thank-you-card");
const allRatings = document.querySelectorAll(".rating-number");

let score;
let isClicked = false;

ratingScore.addEventListener("click", function (e) {
  // console.log(e.target);
  if (e.target.closest(".rating-number")) {
    allRatings.forEach((curr) => {
      curr.classList.remove("clicked");
    });
    isClicked = true;
    score = e.target.textContent;
    updateRating.textContent = score;
    e.target.classList.add("clicked");
  }
});

document.querySelector(".submit").addEventListener("click", function () {
  if (isClicked) {
    landingCard.style.opacity = 0;
    submitCard.style.opacity = 100;
  }
});
