/*jshint esversion: 6 */

let ticTacToeBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
let player1 = true;
let player2 = false;

/* Returns the value at a given row-column position */
function getValue(row, column) {
  if (row < 0 || row > 2 || column < 0 || column > 2) {
    return;
  }
  return ticTacToeBoard[0][0];
}
/*Prints the board to console*/
function printBoard() {
  console.log(ticTacToeBoard[0]);
  console.log(ticTacToeBoard[1]);
  console.log(ticTacToeBoard[2]);
  console.log("###################");
}

function setValue(row, column, value) {
  // set the value
  ticTacToeBoard[row][column] = value;
  // print the board again showing the update
  printBoard();
}

// Make a Play
// Prompt for row
// Prompt for column
// Sets an X or an O on the board

function getUserInput() {
  var row = prompt("enter a row");
  var column = prompt("enter a column");
  //var userInput = prompt("enter 'X' or 'O'");
  /*
    if (userInput !== 'X' && userInput !== 'O') {
        console.log(userInput)
        console.log('Bad user input');
        return;
    }
    */

  // Check to see if a move has been made
  if (getValue(row, column) != null) {
    console.log("Unable to set value");
    return;
  }

  // player1 is true, then make a move with X
  // else make a move with O
  // set player 2 to true

  // Set the value variable up to make the move

  let value;
  if (player1 === true) {
    value = "X";
  } else {
    value = "O";
  }

  setValue(row, column, value);

  // Change the active player
  player1 = !player1;
  player2 = !player2;

  console.log(player1);
  console.log(player2);
}

function checkWinner() {
  let board = ticTacToeBoard;
  const scenario1 =
    (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O") || //top row
    (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O") || //middle row
    (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O") || //bottom row
    (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O") || //first column
    (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O") || //second column
    (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O") || //third column
    (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O") || //top left to bottom right diagonal
    (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O"); //top right to bottom left diagonal
  const scenario2 =
    (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") || //top row
    (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") || //middle row
    (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") || //bottom row
    (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") || //first column
    (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") || //second column
    (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") || //third column
    (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") || //top left to bottom right diagonal
    (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X"); //top right to bottom left diagonal

  let winner = scenario1 ? "O" : "X";
  console.log(`${winner} wins!`);
  return;
}

let gameState = {
  currentUserMove: "",
  ticTacToeBoard,
};

getUserInput();
