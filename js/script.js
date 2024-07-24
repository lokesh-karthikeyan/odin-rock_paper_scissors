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
