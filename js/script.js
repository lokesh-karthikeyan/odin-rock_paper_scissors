let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  let userChoice = prompt("Enter your choice: ");
  userChoice = userChoice.toLowerCase();

  if (userChoice === "" || null || undefined) {
    alert("Please enter the valid choice");
    userChoice = getHumanChoice();
  } else if (
    userChoice !== "rock" &&
    userChoice !== "paper" &&
    userChoice !== "scissors"
  ) {
    alert("Please enter the valid choice");
    userChoice = getHumanChoice();
  }
  return userChoice;
}

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

function playGame() {
  playRound(getComputerChoice(), getHumanChoice());
  playRound(getComputerChoice(), getHumanChoice());
  playRound(getComputerChoice(), getHumanChoice());
  playRound(getComputerChoice(), getHumanChoice());
  playRound(getComputerChoice(), getHumanChoice());
}

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

playGame();
scoreCalculator();
