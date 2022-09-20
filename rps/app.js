function getComputerChioce() {
  let choices = ["rock", "paper", "scissors"];
  let choiceNumber = Math.floor(Math.random() * 3);
  return choices[choiceNumber];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  }
  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    return "computer won";
  } else {
    return "player won";
  }
}

/* function play5Rounds() {
  let computerScore = 0;
  let playerScore = 0;
  for (let i = 0; i < 5; i++) {
    playerChoice = prompt("Enter your choise [rock / paper / scissors]");
    computerChoice = getComputerChioce();

    switch (playRound(playerChoice, computerChoice)) {
      case "tie":
        break;
      case "computer won":
        computerScore++;
        break;
      case "player won":
        playerScore++;
        break;
      default:
        console.log("Something went wront!");
    }
  }
  if (computerScore === playerScore) {
    console.log("It's a tie");
  } else if (computerScore > playerScore) {
    console.log("Computer Won!");
  } else {
    console.log("Player Won!");
  }
}

play5Rounds(); */
