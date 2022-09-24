let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;
let announce = "⬇️Choose to start!⬇️";

let announcement = document.querySelector("#announce");
announcement.textContent = `⬇️  Choose to start!  ⬇️`;

let player = document.querySelector("#human");
player.textContent = `You: ${playerScore}`;

let computer = document.querySelector("#computer");
computer.textContent = `Computer: ${computerScore}`;

let button = document.querySelectorAll("button");
button.forEach((b) => b.addEventListener("click", pp));

function pp() {
  playerChoice = this.id;
  computerChoice = getComputerChioce();
  let result = playRound(playerChoice, computerChoice);
  updateScore(result);
}

function updateScore(whoWon) {
  if (whoWon === "tie") {
    announcement.textContent = `Both chose: ${playerChoice} - It's a Tie!`;
  } else if (whoWon === "computer won") {
    computerScore++;
    computer.textContent = `Computer: ${computerScore}`;
    announcement.textContent = `Computer won`;
  } else {
    playerScore++;
    player.textContent = `You: ${playerScore}`;
    announcement.textContent = `You won!`;
  }
}

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
