// Computer turn
function computerPlay () {
  const moves = ["rock","paper","scissors"];
  // choose random move
  let computerMove = Math.floor(Math.random() * 3) ;
  return moves[computerMove];
}

console.log(computerPlay());