"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

// console.log("secretNumberNUmber", secretNumber);

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    // console.log("guess number is " + guess, typeof guess);
    if (!guess) {
        document.querySelector(".message").textContent = "No number";
    } else if (guess === secretNumber) {
        document.querySelector(".number").textContent = secretNumber;

        document.querySelector(".message").textContent = "Correct number";
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent =
                "Guess is too high";
            score--;
            // score = score - 1;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent =
                "You loss the game";
            document.querySelector(".score").textContent = 0;
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Guess is too low";
            score--;
            // score = score - 1;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent =
                "You loss the game";
            document.querySelector(".score").textContent = 0;
        }
    }
});
