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