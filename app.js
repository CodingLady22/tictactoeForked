// //Access DOM elements in Javascript
let cells = document.querySelectorAll(".row > div");
const restart = document.getElementById("restart");
let turnCounter = 0; //Default count of zero

//Makes Reset button functional (inline function)
restart.addEventListener("click", function(){
   window.location.reload();
})


//Function for Player Input
let currentPlayer = "X";
function display_input() {
  window.event.target.textContent = currentPlayer;
  
  turnCounter++ //We add one turn each time a player hits X or O to keep count
  checkWin();

  if (currentPlayer == "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

//Function for Winning Combos with If, Else if, Else statements
function checkWin() {
  if (
    cells[0].textContent === cells[1].textContent &&
    cells[1].textContent === cells[2].textContent &&
    cells[0].textContent != ""
  ) {
    alert(currentPlayer + " wins!");
  } else if (
    cells[3].textContent === cells[4].textContent &&
    cells[4].textContent === cells[5].textContent &&
    cells[3].textContent != ""
  ) {
    alert(currentPlayer + " wins!");
  } else if (
    cells[6].textContent === cells[7].textContent &&
    cells[7].textContent === cells[8].textContent &&
    cells[6].textContent != ""
  ) {
    alert(currentPlayer + " wins!");
  } else if (
    cells[0].textContent === cells[3].textContent &&
    cells[3].textContent === cells[6].textContent &&
    cells[0].textContent != ""
  ) {
    alert(currentPlayer + " wins!");
  } else if (
    cells[1].textContent === cells[4].textContent &&
    cells[4].textContent === cells[7].textContent &&
    cells[1].textContent != ""
  ) {
    alert(currentPlayer + " wins!");
  } else if (
    cells[2].textContent === cells[5].textContent &&
    cells[5].textContent === cells[8].textContent &&
    cells[2].textContent != ""
  ) {
    alert(currentPlayer + " wins!");
  } else if (
    cells[0].textContent === cells[4].textContent &&
    cells[4].textContent === cells[8].textContent &&
    cells[0].textContent != ""
  ) {
    alert(currentPlayer + " wins!");
  } else if (
    cells[2].textContent === cells[4].textContent &&
    cells[4].textContent === cells[6].textContent &&
    cells[2].textContent != ""
  ) {
    alert(currentPlayer + " wins!");
  } else if(turnCounter == 9) { //The turnCount will hit 9 when no winning combos are met because there are only nine moves in tic tac toe
    alert("Draw!");
  }
}
