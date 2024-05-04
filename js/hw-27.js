// Задание: 1
// let images = document.querySelectorAll("img");
// let imgIndex = 0;

// function showSlides() {
//   images.forEach((img) => {
//     img.style.display = "none";
//   });
//   imgIndex += 1;
//   if (imgIndex >= images.length) {
//     imgIndex = 0;
//   }
//   images[imgIndex].style.display = "block";
// }
// showSlides();
// const setIntervalShowSlides = setInterval(showSlides, 2000);

// ---------------------------------------------------------------
// Задание: 2
// let quotes = document.querySelectorAll("li");
// let quotesIndex = 0;
// function showQuotes() {
//   quotes.forEach((quote) => {
//     quote.style.display = "none";
//   });
//   quotesIndex += 1;
//   if (quotesIndex >= quotes.length) {
//     quotesIndex = 0;
//   }
//   quotes[quotesIndex].style.display = "block";
// }
// showQuotes();
// const setIntervalShowQuotes = setInterval(showQuotes, 2000);
// ---------------------------------------------------------------
// Задание: 3
let hoursInput = document.querySelector(".hours");
let minutesInput = document.querySelector(".minutes");
let secondsInput = document.querySelector(".seconds");
const btn = document.querySelector(".btn");
const timerDisplay = document.querySelector(".timer");

let time = 0;
let intervalId;
btn.addEventListener("click", () => {
  clearInterval(intervalId);
  time =
    parseInt(hoursInput.value) * 3600 +
    parseInt(minutesInput.value) * 60 +
    parseInt(secondsInput.value);
  intervalId = setInterval(countdownTimer, 1000);
});

function countdownTimer() {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);
  timerDisplay.innerHTML = `Осталось времени - ${hours}:${minutes}:${seconds}`;
  time -= 1;

  if (time < 0) {
    clearInterval(intervalId);
    timerDisplay.innerHTML = "Время истекло!";
  }
}
