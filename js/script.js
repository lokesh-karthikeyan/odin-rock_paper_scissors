let humanScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;

/**********************************************************
 * Function objective: It's to return random values.      *
 **********************************************************/

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

/*******************************************************
 * Function objective: To get user's input values.     *
 *******************************************************/

// function getHumanChoice() {
//   let userChoice = prompt("Enter your choice from 'Rock' 'Paper' 'Scissors': ");
//   userChoice = userChoice.toLowerCase();
//
//   // Function calls recursively if the input in "falsy" or 'incorrect' values.
//   if (userChoice === "" || null || undefined) {
//     alert("Please enter the valid choice");
//     userChoice = getHumanChoice();
//   } else if (
//     userChoice !== "rock" &&
//     userChoice !== "paper" &&
//     userChoice !== "scissors"
//   ) {
//     alert("Please enter the valid choice");
//     userChoice = getHumanChoice();
//   }
//   return userChoice;
// }

/*****************************************************************
 * Function objective: To compare user's & computer's input.     *
 *****************************************************************/

function playRound(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    console.log("Oops! It's a tie");
  } else if (computerChoice === "rock") {
    if (humanChoice === "scissors") {
      ++computerScore;
      console.log("You lose! Rock beats Scissors");
    } else if (humanChoice === "paper") {
      ++humanScore;
      console.log("You Win!! Paper beats Rock");
    }
  } else if (computerChoice === "paper") {
    if (humanChoice === "rock") {
      ++computerScore;
      console.log("You lose! Paper beats Rock");
    } else if (humanChoice === "scissors") {
      ++humanScore;
      console.log("You Win!! Scissors beats Paper");
    }
  } else if (computerChoice === "scissors") {
    if (humanChoice === "paper") {
      ++computerScore;
      console.log("You lose! Paper beats Rock");
    } else if (humanChoice === "rock") {
      ++humanScore;
      console.log("You Win!! Rock beats Scissors");
    }
  }
}

/***********************************************************************************
 * Function objective: It's a helper function to call "input comparison" function  *
 ***********************************************************************************/

// function playGame() {
//   playRound(getComputerChoice(), getHumanChoice());
//   playRound(getComputerChoice(), getHumanChoice());
//   playRound(getComputerChoice(), getHumanChoice());
//   playRound(getComputerChoice(), getHumanChoice());
//   playRound(getComputerChoice(), getHumanChoice());
// }

/******************************************************************
 * Function objective: It's to calculate the player's scores.     *
 ******************************************************************/

function scoreCalculator() {
  if (humanScore === computerScore) {
    console.log("THE GAME IS TIED");
  } else if (computerScore > humanScore) {
    console.log("YOU LOSE!!");
    console.log(
      `Your score is = ${humanScore}, and the computer's score is = ${computerScore}`,
    );
  } else if (computerScore < humanScore) {
    console.log("YEAH! YOU WIN!!!");
    console.log(
      `Your score is = ${humanScore}, and the computer's score is = ${computerScore}`,
    );
  }
}

let optionSigns = [...document.querySelectorAll(".signs-player")];

for (let option of optionSigns) {
  option.addEventListener("mouseenter", setHoverEffect);
  option.addEventListener("mouseleave", unsetHoverEffect);
  option.addEventListener("mousedown", setMousepressEffect);
  option.addEventListener("mouseup", unsetMousepressEffect);
  option.addEventListener("click", getHumanChoice);
}

function setHoverEffect(e) {
  let currentSelection = e.target;
  let title = currentSelection.firstElementChild;

  title.style.color = "#000";
}

function unsetHoverEffect(e) {
  let currentSelection = e.target;
  let title = currentSelection.firstElementChild;

  title.style.color = "#fff";
}

function setMousepressEffect(e) {
  let currentSelection = e.target;

  while (!currentSelection.id) {
    let target = currentSelection.parentNode;
    currentSelection = target;
  }

  let button = document.querySelector(`#${currentSelection.id} .choice button`);
  let icon = document.querySelector(
    `#${currentSelection.id} .choice button img`,
  );

  currentSelection.style.backgroundColor = "#000";
  currentSelection.firstElementChild.style.color = "#fff";
  currentSelection.lastElementChild.style.backgroundColor = "#eddd34";
  button.style.backgroundColor = "#eddd34";
  icon.style.backgroundColor = "#eddd34";
}

function unsetMousepressEffect(e) {
  let currentSelection = e.target;

  while (!currentSelection.id) {
    let target = currentSelection.parentNode;
    currentSelection = target;
  }

  let button = document.querySelector(`#${currentSelection.id} .choice button`);
  let icon = document.querySelector(
    `#${currentSelection.id} .choice button img`,
  );

  currentSelection.style.backgroundColor = "";
  currentSelection.firstElementChild.style.color = "#000";
  currentSelection.lastElementChild.style.backgroundColor = "";
  button.style.backgroundColor = "";
  icon.style.backgroundColor = "";
}

function getHumanChoice(e) {
  let currentSelection = e.target;

  while (!currentSelection.id) {
    let target = currentSelection.parentNode;
    currentSelection = target;
  }

  switch (currentSelection.id) {
    case "player-rock":
      playerChoice = "rock";
      break;
    case "player-paper":
      playerChoice = "paper";
      break;
    case "player-scissors":
      playerChoice = "scissors";
      break;
  }
  computerChoice = getComputerChoice();
  setBotChoiceSelection(computerChoice, unsetBotChoiceSelection);
}

// playGame();
// scoreCalculator();
