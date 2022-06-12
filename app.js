// Rules: rock beats scissors, scissors beats paper, paper beats rock

// Computer turn
function computerPlay () {
  const moves = ["rock","paper","scissors"];
  // choose random move
  let computerMove = Math.floor(Math.random() * 3) ;
  return moves[computerMove];
}

// Round of game
function playRound(playerSelection,computerSelection) {
  // handle user inputs like: "RoCk" to lowercase
  playerSelection = playerSelection.toLowerCase();

  // handle invalid input
  // to do
  

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

  // Game length is 5 round
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
    if (roundsPlayerWon > roundsComputerWon) {
      console.log(`%c Player won with score: ${roundsPlayerWon} vs ${roundsComputerWon}!\n Reload page to play again. `, 
      "background: green; color: white; padding: 2px 5px");
    }
    else if (roundsComputerWon > roundsPlayerWon) {
      console.log(`%c Computer won with score: ${roundsComputerWon} vs ${roundsPlayerWon}!\n Reload page to play again. `, 
      "background: red; color: white; padding: 2px 5px");
    }
    else {
      console.log("%c It is a draw, reload page to play again! ",
      "background: orange; color: white; padding: 2px 5px");
      
      console.log(`Computer score: ${roundsComputerWon}`);
      console.log(`Player score: ${roundsPlayerWon}`);
    }
  }
}

game();