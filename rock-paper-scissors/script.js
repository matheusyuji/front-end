function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
  let choice = getRandomNumber(1, 3);
  switch (choice) {
    case 1:
      choice = "ROCK";
      return choice;
    case 2:
      choice = "PAPER";
      return choice;
    case 3:
      choice = "SCISSORS";
      return choice;
  }
}

function getHumanChoice() {
  let choice = prompt("Choose Rock, Paper or Scissors");

  switch(choice.toUpperCase()) {
    case "ROCK":
    case "PAPER":
    case "SCISSORS":
      return choice.toUpperCase();
    default:
      alert("Invalid! Try again");
      return getHumanChoice();
  }
}

let humanScore = 0;
let computerScore = 0;

function incrementScore(player) {
  if(player === "human") {
    humanScore++;
  } else {
    computerScore++
  }
} 

function showResult(humanChoice, computerChoice, winner) {
  if(winner == "human") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    incrementScore("human");
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    incrementScore("computer");
  }
}

function playRound(humanChoice, computerChoice) {
  if(humanChoice === computerChoice) {
    console.log(`It's a tie between ${humanChoice} and ${computerChoice}`);
    return;
  }
  switch(humanChoice) {
    case "ROCK":
      if(computerChoice === "PAPER") {
        showResult(humanChoice, computerChoice, "computer");
      } else {
        showResult(humanChoice, computerChoice, "human");
      }
      break;
    case "PAPER":
      if(computerChoice == "SCISSORS") {
        showResult(humanChoice, computerChoice, "computer");
      } else {
        showResult(humanChoice, computerChoice, "human");
      }
      break;
    case "SCISSORS":
      if(computerChoice == "ROCK") {
        showResult(humanChoice, computerChoice, "computer");
      } else {
        showResult(humanChoice, computerChoice, "human");
      }
      break;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);