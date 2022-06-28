// Rules: rock beats scissors, scissors beats paper, paper beats rock
const moves = ["rock", "paper", "scissors"];

// Computer turn
function computerPlay() {
  // choose random move
  let computerMove = Math.floor(Math.random() * 3);
  return moves[computerMove];
}

// Round of game
function playRound(playerSelection, computerSelection) {
  // determine round winner
  // If player and computer played same - it is draw
  if (playerSelection === computerSelection) {
    console.log("It is a draw");
  }
  // In case player and computer played diferent
  else {
    // Switch per player choice
    switch (playerSelection) {
      // If player choose paper
      case "paper":
        if (computerSelection === "rock") {
          console.log(
            `Player won: ${playerSelection} beats ${computerSelection}`
          );
          return "player";
        }
        if (computerSelection === "scissors") {
          console.log(
            `Computer won: ${computerSelection} beats ${playerSelection}`
          );
          return "computer";
        }
      // If player choose rock
      case "rock":
        if (computerSelection === "paper") {
          console.log(
            `Computer won: ${computerSelection} beats ${playerSelection}`
          );
          return "computer";
        }
        if (computerSelection === "scissors") {
          console.log(
            `Player won: ${playerSelection} beats ${computerSelection}`
          );
          return "player";
        }
      // If player choose scissors
      case "scissors":
        if (computerSelection === "paper") {
          console.log(
            `Player won: ${playerSelection} beats ${computerSelection}`
          );
          return "player";
        }
        if (computerSelection === "rock") {
          console.log(
            `Computer won: ${computerSelection} beats ${playerSelection}`
          );
          return "computer";
        }
    }
  }
}

// Track how much round player or computer won, to choose winner at end
var roundsPlayerWon = 0;
var roundsComputerWon = 0;

function game(playerSelection) {
  let gameRoundSettings = 5; // Change this to change round count - default is 5 round
  // let gameRound = true; // While true game is active, new round will start
  let gameEnded = false;

  // Start round
  let roundResult = playRound(
    // Take user input
    playerSelection,
    computerPlay()
  );

  if (roundResult === "player") {
    roundsPlayerWon++;
    // If player won enought rounds (gameRoundSettings) then end game
    if (roundsPlayerWon >= gameRoundSettings) {
      gameEnded = true;
    }
  }
  if (roundResult === "computer") {
    roundsComputerWon++;
    // If computer won enought rounds (gameRoundSettings) then end game
    if (roundsComputerWon >= gameRoundSettings) {
      gameEnded = true;
    }
  }

  // Show final score
  if (gameEnded) {
    // Player won
    if (roundsPlayerWon > roundsComputerWon) {
      console.log(
        `%c Player won with score: ${roundsPlayerWon} vs ${roundsComputerWon}!\n Reload page to play again. `,
        "background: green; color: white; padding: 2px 5px"
      );
    }
    // Computer won
    else if (roundsComputerWon > roundsPlayerWon) {
      console.log(
        `%c Computer won with score: ${roundsComputerWon} vs ${roundsPlayerWon}!\n Reload page to play again. `,
        "background: red; color: white; padding: 2px 5px"
      );
    } else {
      console.log("Unexpected error!");
    }
  }
}

// Add event listener to "playable cards - weapons"
const cards = document.getElementsByClassName("card");
console.log(cards);
[...cards].map((card) => card.addEventListener("click", handleClick));

function handleClick(event) {
  const playerSelection = event.target.parentNode.dataset.card;

  // Start game
  game(playerSelection);
}
