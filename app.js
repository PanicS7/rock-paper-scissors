// Rules: rock beats scissors, scissors beats paper, paper beats rock
const moves = ["rock","paper","scissors"];

// Computer turn
function computerPlay () {
  // choose random move
  let computerMove = Math.floor(Math.random() * 3) ;
  return moves[computerMove];
}

// Round of game
function playRound(playerSelection,computerSelection) {
  // handle user inputs like: "RoCk" to lowercase
  playerSelection = playerSelection !== null ? playerSelection.toLowerCase() : playerSelection;

  // Handle invalid or empty input
  while (!moves.includes(playerSelection) || playerSelection === null) {
    // Keep asking user to enter valid input
    playerSelection = prompt("Please type valid option! 'paper', 'rock' or 'scissors");
  }
  

  // determine round winner
  // If player and computer played same - it is draw
  if (playerSelection === computerSelection) {
    console.log("It is a draw");
  }
  // In case player and computer played diferent
  else {
    // Switch per player choice
    switch(playerSelection) {
      // If player choose paper
      case "paper":
        if (computerSelection === "rock") {
          console.log(`Player won: ${playerSelection} beats ${computerSelection}`);
          return "player";
        }
        if (computerSelection === "scissors") {
          console.log(`Computer won: ${computerSelection} beats ${playerSelection}`);
          return "computer";
        }
      // If player choose rock
      case "rock":
        if (computerSelection === "paper") {
          console.log(`Computer won: ${computerSelection} beats ${playerSelection}`);
          return "computer";
        }
        if (computerSelection === "scissors") {
          console.log(`Player won: ${playerSelection} beats ${computerSelection}`);
          return "player";
        }
      // If player choose scissors
      case "scissors":
        if (computerSelection === "paper") {
          console.log(`Player won: ${playerSelection} beats ${computerSelection}`);
          return "player";
        }
        if (computerSelection === "rock") {
          console.log(`Computer won: ${computerSelection} beats ${playerSelection}`);
          return "computer";
        }
    }
  }
  
}

function game() {
  let gameRoundSettings = 5; // Change this to change round count - default is 5 round
  let gameRound = 1;
  // Track how much round player or computer won, to choose winner at end
  let roundsPlayerWon = 0;
  let roundsComputerWon = 0;

  while (gameRound <= gameRoundSettings) {
    // Start round
    let roundResult = playRound(
      // Take user input
      prompt("Choose one of: 'paper', 'rock' or 'scissors'"),
      computerPlay()
    );

    if (roundResult === "player") {
      roundsPlayerWon++;
    }
    if (roundResult === "computer") {
      roundsComputerWon++;
    }

    gameRound++;
  }

  // Show final score
  if (gameRound > gameRoundSettings) {
    // Player won
    if (roundsPlayerWon > roundsComputerWon) {
      console.log(`%c Player won with score: ${roundsPlayerWon} vs ${roundsComputerWon}!\n Reload page to play again. `, 
      "background: green; color: white; padding: 2px 5px");
    }
    // Computer won
    else if (roundsComputerWon > roundsPlayerWon) {
      console.log(`%c Computer won with score: ${roundsComputerWon} vs ${roundsPlayerWon}!\n Reload page to play again. `, 
      "background: red; color: white; padding: 2px 5px");
    }
    // Draw - player and computer won same amount of rounds
    else {
      console.log("%c It is a draw, reload page to play again! ",
      "background: orange; color: white; padding: 2px 5px");
      
      console.log(`Computer score: ${roundsComputerWon}`);
      console.log(`Player score: ${roundsPlayerWon}`);
    }
  }
}

game();