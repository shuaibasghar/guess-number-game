"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
document.querySelector(".number").textContent = secretNumber;

console.log("secretNumberNUmber", secretNumber);

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    // console.log("guess number is " + guess, typeof guess);
    if (!guess) {
        document.querySelector(".message").textContent = "No number";
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "Correct number";
    } else if (guess > secretNumber) {
        document.querySelector(".message").textContent = "Guess is too high";
        // score = score - 1;
        score--;
        document.querySelector(".score").textContent = score;
    } else if (guess < secretNumber) {
        document.querySelector(".message").textContent = "Guess is too low";
        score--;
        document.querySelector(".score").textContent = score;
    }
});
