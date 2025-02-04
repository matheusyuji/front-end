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

function playRound(playerChoice, computerChoice) {
  if(playerChoice === computerChoice) {
    return {playerChoice, computerChoice, winner: "tie"};
  }
  switch(playerChoice) {
    case "ROCK":
      if(computerChoice === "PAPER") {
        winner = "computer";
      } else {
        winner = "player";
      }
      break;
    case "PAPER":
      if(computerChoice === "SCISSORS") {
        winner = "computer";
      } else {
        winner = "player";
      }
      break;
    case "SCISSORS":
      if(computerChoice === "ROCK") {
        winner = "computer";
      } else {
        winner = "player";
      }
      break;
  }

  return {playerChoice, computerChoice, winner};
}

let playerScore = 0;
let computerScore = 0;

let playerTextContent;
let computerTextContent;

const btnChoice = document.querySelectorAll(".btn-choice");
const btnReset = document.querySelector(".btn-reset");
const computerScoreDiv = document.querySelector(".computer-score");
const playerScoreDiv = document.querySelector(".player-score");
const roundWinner = document.querySelector(".round-winner");
const gameWinner = document.querySelector(".game-winner");

const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors")

computerScoreDiv.textContent = `${computerScore}`
playerScoreDiv.textContent = `${playerScore}`

function getTextContent(result) {
  if (result.playerChoice === "ROCK") {
    playerTextContent = rock.textContent;
  } else if (result.playerChoice === "PAPER") {
    playerTextContent = paper.textContent;
  } else {
    playerTextContent = scissors.textContent;
  }

  if (result.computerChoice === "ROCK") {
    computerTextContent = rock.textContent;
  } else if (result.computerChoice  === "PAPER") {
    computerTextContent = paper.textContent;
  } else {
    computerTextContent = scissors.textContent;
  }
}

function showResult(result) {
  if (result.winner === "player") {
    ++playerScore;
    playerScoreDiv.textContent = `${playerScore}`;
    roundWinner.textContent = `You win! ${playerTextContent} beats ${computerTextContent}`;
  } else if (result.winner === "computer") {
    ++computerScore;
    computerScoreDiv.textContent = `${computerScore}`;
    roundWinner.textContent = `You lose! ${computerTextContent} beats ${playerTextContent}`;
  } else {
    roundWinner.textContent = `It's a tie between ${playerTextContent} and ${computerTextContent}`;
  }
}

function disableButtons() {
  btnChoice.forEach(btn => {
    btn.disabled = true;
  });
}

function checkGameOver() { 
  if (playerScore === 5) {
    gameWinner.textContent = `You won!`;
    disableButtons();
  } else if (computerScore === 5) {
    gameWinner.textContent = `You lost!`;
    disableButtons();
  }
}

btnChoice.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let playerSelection = event.target.id;
    playerSelection = playerSelection.toUpperCase();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    getTextContent(result);
    showResult(result, playerTextContent, computerTextContent);
    checkGameOver();
  });
});

function enableButtons() {
  btnChoice.forEach(btn => {
    btn.disabled = false;
  });
}

function resetGame() {
  enableButtons();
  computerScore = 0;
  playerScore = 0;
  playerScoreDiv.textContent = `${playerScore}`;
  computerScoreDiv.textContent = `${computerScore}`;
  roundWinner.textContent = "";
  gameWinner.textContent = "";
}

btnReset.addEventListener("click", resetGame);