"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
// document.querySelector(".number").textContent = secretNumber;

// console.log("secretNumberNUmber", secretNumber);
const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    // console.log("guess number is " + guess, typeof guess);
    if (!guess) {
        displayMessage("No Number");
        // document.querySelector(".message").textContent = "No number";
    }

    // when player wins
    else if (guess === secretNumber) {
        document.querySelector(".number").textContent = secretNumber;
        displayMessage("Correct number");
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".number").style.width = "30rem";

        // document.querySelector(".message").textContent = "Correct number";
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    }

    // when guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(
                guess > secretNumber ? "Guess is too high" : "Guess is too low"
            );
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("You loss the game");
            document.querySelector("body").style.backgroundColor = "#ff8080";
            document.querySelector(".score").textContent = 0;
        }
    }

    //  else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent =
    //             "Guess is too high";
    //         score--;
    //         // score = score - 1;
    //         document.querySelector(".score").textContent = score;
    //     } else {
    //         document.querySelector(".message").textContent =
    //             "You loss the game";
    //         document.querySelector(".score").textContent = 0;
    //     }
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "Guess is too low";
    //         score--;
    //         // score = score - 1;
    //         document.querySelector(".score").textContent = score;
    //     } else {
    //         document.querySelector(".message").textContent =
    //             "You loss the game";
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }

    document.querySelector(".again").addEventListener("click", function () {
        score = 20;
        const secretNumber = Math.trunc(Math.random() * 20) + 1;
        displayMessage("Start guessing...");
        document.querySelector(".score").textContent = score;
        document.querySelector(".number").textContent = "?";
        document.querySelector(".guess").value = "";
        document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".number").style.width = "15rem";
    });
});
