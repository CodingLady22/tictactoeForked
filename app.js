// //Access DOM elements in Javascript
let cells = document.querySelectorAll(".row > div");
// const restart = document.querySelector("#restart");

//Function for Player Input
let player_one = 1;
function display_input() {
  if (player_one == 1) {
    window.event.target.textContent = "X";
    player_one = 0;
  } else {
    window.event.target.textContent = "O";
    player_one = 1;
  }
  checkWin();
}

//   if (cells[(0, 1, 2)].textContent === "X") {
//     console.log("X wins!"); //Across
//   }
//   if (cells[(3, 4, 5)].textContent === "X") {
//     console.log("X wins!"); //Across
//   }
//   if (cells[(6, 7, 8)].textContent === "X") {
//     console.log("X wins!"); //Across
//   }
//   if (cells[(0, 3, 6)].textContent === "X") {
//     console.log("X wins!"); //Down
//   }
//   if (cells[(1, 4, 7)].textContent === "X") {
//     console.log("X wins!"); //Down
//   }
//   if (cells[(2, 5, 8)].textContent === "X") {
//     console.log("X wins!"); //Down
//   }
//   if (cells[(0, 4, 8)].textContent === "X") {
//     console.log("X wins!"); //Diagonal
//   }
//   if (cells[(2, 4, 6)].textContent === "X") {
//     console.log("X wins!"); //Diagonal /* End of X */
//   }
  
function checkWin() {
if (cells[0].textContent === "X")  {
    if (cells[2].textContent === "X" && cells[3].textContent === "X") {
        console.log("X wins!");
    }
    if (cells[3].textContent === "X") {
        if (cells[4].textContent === "X" && cells[5].textContent === "X") {
            console.log("X wins!");
        }
    }
    if (cells[6].textContent === "X") {
        if (cells[7].textContent === "X" && cells[8].textContent === "X") {
            console.log("X wins!");
        }
    }
    if (cells[0].textContent === "X") {
        if (cells[3].textContent === "X" && cells[6].textContent === "X") {
            console.log("X wins!");
    }
    if (cells[1].textContent === "X") {
        if (cells[4].textContent === "X" && cells[7].textContent === "X") {
            console.log("X wins!");
        }
    }
    if (cells[2].textContent === "X") {
        if (cells[5].textContent === "X" && cells[8].textContent === "X") {
            console.log("X wins!");
        }
    }
    if (cells[0].textContent === "X") {
        if (cells[4].textContent === "X" && cells[8].textContent === "X") {
            console.log("X wins!");
        }
    }
    if (cells[2].textContent === "X") {
        if (cells[4].textContent === "X" && cells[6].textContent === "X") {
            console.log("X wins!");
        }
    }    
}

}
}
