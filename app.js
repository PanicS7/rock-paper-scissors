// Rules: rock beats scissors, scissors beats paper, paper beats rock
const moves = ["rock", "paper", "scissors"];

// Computer turn
function computerPlay() {
  // choose random move
  let computerMove = Math.floor(Math.random() * 3);
  return moves[computerMove];
}

// Round of game
function playRound(playerSelection, computerSelection, resultElem) {
  // determine round winner
  // If player and computer played same - it is draw
  if (playerSelection === computerSelection) {
    resultElem.innerText = "It is a draw";

    // Add flashing style when element change
    resultElem.classList.add("played");
    setTimeout(() => removeStyleAnimation(resultElem), 300);
  }
  // In case player and computer played diferent
  else {
    // Switch per player choice
    switch (playerSelection) {
      // If player choose paper
      case "paper":
        if (computerSelection === "rock") {
          resultElem.innerText = `Player won: ${playerSelection} beats ${computerSelection}`;

          // Add flashing style when element change
    resultElem.classList.add("played");
    setTimeout(() => removeStyleAnimation(resultElem), 300);
          return "player";
        }
        if (computerSelection === "scissors") {
          resultElem.innerText = `Computer won: ${computerSelection} beats ${playerSelection}`;

          // Add flashing style when element change
    resultElem.classList.add("played");
    setTimeout(() => removeStyleAnimation(resultElem), 300);
          return "computer";
        }
      // If player choose rock
      case "rock":
        if (computerSelection === "paper") {
          resultElem.innerText = `Computer won: ${computerSelection} beats ${playerSelection}`;

          // Add flashing style when element change
    resultElem.classList.add("played");
    setTimeout(() => removeStyleAnimation(resultElem), 300);
          return "computer";
        }
        if (computerSelection === "scissors") {
          resultElem.innerText = `Player won: ${playerSelection} beats ${computerSelection}`;

          // Add flashing style when element change
    resultElem.classList.add("played");
    setTimeout(() => removeStyleAnimation(resultElem), 300);
          return "player";
        }
      // If player choose scissors
      case "scissors":
        if (computerSelection === "paper") {
          resultElem.innerText = `Player won: ${playerSelection} beats ${computerSelection}`;

          // Add flashing style when element change
    resultElem.classList.add("played");
    setTimeout(() => removeStyleAnimation(resultElem), 300);
          return "player";
        }
        if (computerSelection === "rock") {
          resultElem.innerText = `Computer won: ${computerSelection} beats ${playerSelection}`;

          // Add flashing style when element change
    resultElem.classList.add("played");
    setTimeout(() => removeStyleAnimation(resultElem), 300);
          return "computer";
        }
    }
  }
}

// Track how much round player or computer won, to choose winner at end
var roundsPlayerWon = 0;
var roundsComputerWon = 0;

function game(playerSelection, resultElem, playerScoreElem, computerScoreElem) {
  // Start round
  let roundResult = playRound(
    // Take user input
    playerSelection,
    computerPlay(),
    resultElem
  );

  if (roundResult === "player") {
    roundsPlayerWon++;
    playerScoreElem.innerText = roundsPlayerWon;

    // Add flashing style when element change
    playerScoreElem.classList.add("played");
    setTimeout(() => removeStyleAnimation(playerScoreElem), 300);
  }
  if (roundResult === "computer") {
    roundsComputerWon++;
    computerScoreElem.innerText = roundsComputerWon;

    // Add flashing style when element change
    computerScoreElem.classList.add("played");
    setTimeout(() => removeStyleAnimation(computerScoreElem), 300);
  }
}

// Select elem to append game message (who won round)
const resultElem = document.getElementById("roundResult");
// Score placeholders
const playerScoreElem = document.getElementById("player");
const computerScoreElem = document.getElementById("computer");

// Add event listener to "playable cards - weapons"
const cards = document.getElementsByClassName("card");
[...cards].map((card) =>
  card.addEventListener("click", (e) => {
    handleClick(e, resultElem, playerScoreElem, computerScoreElem);
  })
);

// Add event listener to restart button
document.getElementById("restart").addEventListener("click", (e) => {
  restartGame(resultElem, playerScoreElem, computerScoreElem);
});

function handleClick(event, resultElem, playerScoreElem, computerScoreElem) {
  const playerSelection = event.target.parentNode.dataset.card;

  // Add flashing style
  event.target.classList.add("played");
  setTimeout(() => removeStyleAnimation(event.target), 300);
  
  // Start game
  game(playerSelection, resultElem, playerScoreElem, computerScoreElem);
}

function restartGame(resultElem, playerScoreElem, computerScoreElem) {
  // Reset globals - game score
  roundsPlayerWon = 0;
  roundsComputerWon = 0;

  // Reset UI - message and visual score
  resultElem.innerText = "";
  playerScoreElem.innerText = "0";
  computerScoreElem.innerText = "0";
}

function removeStyleAnimation(elem) {
  elem.classList.remove("played");
}
