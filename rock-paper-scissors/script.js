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

const buttons = document.querySelectorAll("button");
const computerScoreDiv = document.querySelector(".computer-score");
const playerScoreDiv = document.querySelector(".player-score");
const roundWinner = document.querySelector(".round-winner");
const gameWinner = document.querySelector(".game-winner");

computerScoreDiv.textContent = `${computerScore}`
playerScoreDiv.textContent = `${playerScore}`

function showResult(result) {
  if (result.winner === "player") {
    ++playerScore;
    playerScoreDiv.textContent = `${playerScore}`
    roundWinner.textContent = `You win! ${result.playerChoice} beats ${result.computerChoice}`
  } else if (result.winner === "computer") {
    ++computerScore;
    computerScoreDiv.textContent = `${computerScore}`
    roundWinner.textContent = `You lose! ${result.computerChoice} beats ${result.playerChoice}`
  } else {
    roundWinner.textContent = `It's a tie between ${result.playerChoice} and ${result.computerChoice}`
  }
}

// ve se um dos dois tem score === 5
// mensagem do vencedor 

function checkGameOver() { 
  if (playerScore === 5) {
    gameWinner.textContent = `Congratulations! You won from ${playerScore} to ${computerScore}`
  } else if (computerScore === 5) {
    gameWinner.textContent = `Failed! You lost from ${computerScore} to ${playerScore}`
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let playerSelection = event.target.id;
    playerSelection = playerSelection.toUpperCase();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    showResult(result);
    checkGameOver();
    // verifica se o game acabo
    // caso acabe anuncia o vencedor e reseta o game => um botao
    // 2 formas de resetar o game acabando ou clicando no botao
  });
});