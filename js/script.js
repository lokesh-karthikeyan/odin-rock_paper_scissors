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

// function playRound(computerChoice, humanChoice) {
//   if (computerChoice === humanChoice) {
//     console.log("Oops! It's a tie");
//   } else if (computerChoice === "rock") {
//     if (humanChoice === "scissors") {
//       ++computerScore;
//       console.log("You lose! Rock beats Scissors");
//     } else if (humanChoice === "paper") {
//       ++humanScore;
//       console.log("You Win!! Paper beats Rock");
//     }
//   } else if (computerChoice === "paper") {
//     if (humanChoice === "rock") {
//       ++computerScore;
//       console.log("You lose! Paper beats Rock");
//     } else if (humanChoice === "scissors") {
//       ++humanScore;
//       console.log("You Win!! Scissors beats Paper");
//     }
//   } else if (computerChoice === "scissors") {
//     if (humanChoice === "paper") {
//       ++computerScore;
//       console.log("You lose! Paper beats Rock");
//     } else if (humanChoice === "rock") {
//       ++humanScore;
//       console.log("You Win!! Rock beats Scissors");
//     }
//   }
// }

function compareCurrentRoundResult() {
  if (computerScore !== 5 && humanScore !== 5) {
    let player = document.querySelector(".player-logo");
    let opponent = document.querySelector(".computer-logo");

    if (playerChoice === computerChoice) {
      setTieUiEffect(player, opponent);
    }
    console.log(playerChoice, computerChoice);
    compareChoices(player, opponent);
  }
}

function compareChoices(player, opponent) {
  // let player = document.querySelector(".player-logo");
  // let opponent = document.querySelector(".computer-logo");
  let playerBox = document.querySelector(".player-container");
  let computerBox = document.querySelector(".computer-container");
  let playerScoreCard = document.querySelector(
    ".player-score .current-score p",
  );
  let computerScoreCard = document.querySelector(
    ".computer-score .current-score p",
  );

  switch (playerChoice) {
    case "rock":
      if (computerChoice === "paper") {
        ++computerScore;
        setScore(computerScore, computerScoreCard);
        setWinnerUiEffect(opponent, computerBox);
        setLoserUiEffect(player, playerBox);
      }
      if (computerChoice === "scissors") {
        ++humanScore;
        setScore(humanScore, playerScoreCard);
        setWinnerUiEffect(player, playerBox);
        setLoserUiEffect(opponent, computerBox);
      }
      break;

    case "paper":
      if (computerChoice === "rock") {
        ++humanScore;
        setScore(humanScore, playerScoreCard);
        setWinnerUiEffect(player, playerBox);
        setLoserUiEffect(opponent, computerBox);
      }
      if (computerChoice === "scissors") {
        ++computerScore;
        setScore(computerScore, computerScoreCard);
        setWinnerUiEffect(opponent, computerBox);
        setLoserUiEffect(player, playerBox);
      }
      break;

    case "scissors":
      if (computerChoice === "rock") {
        ++computerScore;
        setScore(computerScore, computerScoreCard);
        setWinnerUiEffect(opponent, computerBox);
        setLoserUiEffect(player, playerBox);
      }
      if (computerChoice === "paper") {
        ++humanScore;
        setScore(humanScore, playerScoreCard);
        setWinnerUiEffect(player, playerBox);
        setLoserUiEffect(opponent, computerBox);
      }
      console.log(humanScore, computerScore);
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

let playerOptions = [...document.querySelectorAll(".signs-player")];

for (let option of playerOptions) {
  option.addEventListener("mouseenter", setHoverEffect);
  option.addEventListener("mouseleave", unsetHoverEffect);
  option.addEventListener("mousedown", setMousepressEffect);
  option.addEventListener("mouseup", unsetMousepressEffect);
  option.addEventListener("click", getHumanChoice);
  option.addEventListener("click", compareCurrentRoundResult);
}

function setHoverEffect(e) {
  let currentSelection = e.target;
  let title = currentSelection.firstElementChild;

  currentSelection.style.cssText =
    "transform: scale(1.1); border: solid 5px #000; background-color: #eddd34; border-radius: 0; box-shadow: 0 0 0 3px #202a2f;";
  title.style.color = "#000";
}

function unsetHoverEffect(e) {
  let currentSelection = e.target;
  let title = currentSelection.firstElementChild;

  currentSelection.style = "";
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

  setTimeout(() => {
    currentSelection.style.backgroundColor = "";
    currentSelection.firstElementChild.style.color = "";
    currentSelection.lastElementChild.style.backgroundColor = "";
    button.style.backgroundColor = "";
    icon.style.backgroundColor = "";
  }, 1200);
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

/**********************************************************************************
 * Function objective: Set the UI visual effects for the computer's selection     *
 **********************************************************************************/

function setBotChoiceSelection(choice, callbackFunction) {
  let botChoice = document.getElementById(`computer-${choice}`);

  botChoice.classList.add("bot-choice");

  setTimeout(function () {
    callbackFunction(botChoice);
  }, 1200);
}

/*************************************************************************************
 * Function objective: Revert the UI visual effects for the computer's selection     *
 *************************************************************************************/

function unsetBotChoiceSelection(tag) {
  tag.classList.remove("bot-choice");
}

function setWinnerUiEffect(icon, optionContainer) {
  icon.style.cssText =
    "background-color: #99D987; box-shadow: 15px 15px 10px #abf296";
  optionContainer.style.cssText =
    "background-color: #99D987; box-shadow: 15px 15px 10px #abf296";
  setTimeout(function () {
    icon.style = "";
    optionContainer.style = "";
  }, 1200);
}

function setLoserUiEffect(icon, optionContainer) {
  icon.style.cssText =
    "background-color: #D0857D; box-shadow: 15px 15px 10px #e8948b";
  optionContainer.style.cssText =
    "background-color: #D0857D; box-shadow: 15px 15px 10px #e8948b";
  setTimeout(function () {
    icon.style = "";
    optionContainer.style = "";
  }, 1200);
}

function setTieUiEffect(iconPlayer, iconBot) {
  let icons = [iconPlayer, iconBot];
  let optionContainers = [
    document.querySelector(".player-container"),
    document.querySelector(".computer-container"),
  ];

  for (let icon of icons) {
    icon.style.cssText =
      "background-color: #f7f8f4; box-shadow: 15px 15px 10px #ffffff";
    setTimeout(function () {
      icon.style = "";
    }, 1200);
  }

  for (let optionContainer of optionContainers) {
    optionContainer.style.cssText =
      "background-color: #f7f8f4; box-shadow: 15px 15px 10px #ffffff";
    setTimeout(function () {
      optionContainer.style = "";
    }, 1200);
  }
}

function setScore(scoreValue, targetElem) {
  targetElem.textContent = scoreValue;
}

// playGame();
// scoreCalculator();
