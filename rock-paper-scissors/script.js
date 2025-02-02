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

function showResult(humanChoice, computerChoice, winner) {
  if(winner === "human") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else if(winner === "computer") {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  } else {
    console.log(`It's a tie between ${humanChoice} and ${computerChoice}`);
  }
}

function playRound(humanChoice, computerChoice) {
  if(humanChoice === computerChoice) {
    return {humanChoice, computerChoice, winner: "tie"};
  }
  switch(humanChoice) {
    case "ROCK":
      if(computerChoice === "PAPER") {
        winner = "computer";
      } else {
        winner = "human";
      }
      break;
    case "PAPER":
      if(computerChoice === "SCISSORS") {
        winner = "computer";
      } else {
        winner = "human";
      }
      break;
    case "SCISSORS":
      if(computerChoice === "ROCK") {
        winner = "computer";
      } else {
        winner = "human";
      }
      break;
  }

  return {humanChoice, computerChoice, winner};
}

function gameWinner(humanScore, computerScore) {
  if (humanScore > computerScore) {
    console.log(`Congratulations! You won from ${humanScore} to ${computerScore}`)
  } else {
    console.log(`Failed! You lost from ${computerScore} to ${humanScore}`)
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round = 0;

  while(round < 5) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    let result = playRound(humanSelection, computerSelection);
    showResult(result.humanChoice, result.computerChoice, result.winner);
    if(result.winner === "human") {
      humanScore++;
      round++;
    } else if(result.winner === "computer") {
      computerScore++;
      round++;
    }
  }
  gameWinner(humanScore, computerScore);
}

playGame();