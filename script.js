// picking a secret numbet
//  naming variables
let secretNum = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
// document.querySelector(".question").textContent = secretNum;

let totalScore = 20;

// do a function for repetitive code so instead of thr plenty code just call a function

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//this part is applied when you input a number and check
document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".number").value);
  console.log(guessNumber);
  console.log(typeof guessNumber);

  // no number

  if (!guessNumber) {
    // document.querySelector(".message").textContent = "No Number!";

    // using the function
    displayMessage("No Number!");

    // correct number
  } else if (guessNumber === secretNum) {
    // document.querySelector(".message").textContent = "correct number!";

    displayMessage("correct number!");

    document.querySelector(".question").textContent = secretNum;

    document.querySelector("body").style.backgroundColor = "#FF0000";

    document.querySelector(".question").style.width = "70px";

    if (totalScore > highScore) {
      highScore = totalScore;

      document.querySelector(".high-score").textContent = highScore;
    }
  } else if (guessNumber !== secretNum) {
    if (totalScore > 1) {
      document.querySelector(".message").textContent =
        guessNumber > secretNum ? "Too high !" : "Too low!";
      // reduces the score when we fail
      totalScore = totalScore - 1;
      document.querySelector(".score").textContent = totalScore;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
    }
  }

  // // higher numbers
  // else if (guessNumber > secretNum) {
  //   if (totalScore > 1) {
  //     document.querySelector(".message").textContent = " high!";

  //     // reduces the score when we fail
  //     totalScore = totalScore - 1;
  //     document.querySelector(".score").textContent = totalScore;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the game";
  //   }
  // }
  // //lower number
  // else if (guessNumber < secretNum) {
  //   if (totalScore > 1) {
  //     document.querySelector(".message").textContent = "Low!";

  //     // reduces the score
  //     // totalscore = totalscore - 1;
  //     totalScore--;
  //     document.querySelector(".score").textContent = totalScore;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the game";
  //   }
  // }
});

// resets the initial values
document.querySelector(".again").addEventListener("click", function () {
  totalScore = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing ...";

  document.querySelector(".question").textContent = "?";

  document.querySelector(".number").value = "";

  document.querySelector("body").style.backgroundColor = "rgb(169, 178, 178)";

  document.querySelector(".question").style.width = "40px";
});
