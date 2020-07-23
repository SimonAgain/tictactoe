/* game version_06.. Random AI working. */

$(document).ready(function() {

  $('button').on(`click`, function() {
    const buttonPressed = this.id; // get the ID of the button.
    if ( validMove(buttonPressed/*, currentPlayer*/) ) {
      $('#' + buttonPressed).text(currentPlayer);
      $('#' + buttonPressed).css('color', 'black');
      $('#' + buttonPressed).css('font-size', '50px');
      updateGameStatus();
      if ( onePlayerMode && !gameOver) { // computer's move
          playComputerMove();
          updateGameStatus();
      }; // end if onePlayerMode
    };
  }); // end position placement click

  $('#resetGame').on('click', function() {
    console.log('Reset Game');
    resetScore();
    playAgain();
  });

  $('#playAgain').on('click', function() {
    console.log('Play Again');
    playAgain();
  });

  $('#onePlayerMode').on('click', function() {
    console.log('One Player Mode pressed');
    if ( onePlayerMode ) { // if already in onePlayerMode
      onePlayerMode = false; // change it to twoPlayerMode
      $(this).css('color','black');
      $(this)[0].value='Activate One Player Mode';
    } else { // if not already in onePlayerMode
      onePlayerMode = true; // change to onePlayerMode
      $(this).css('color','red');
      $(this)[0].value='One Player Mode Active';
    };//end if
  });
});// end document ready

// the game board. An array of 3 arrays. Rows and columns.
let gameBoard = [ ["", "", "",], [ "", "", "",], [ "", "", "",] ];

// The symbols to use on the gameBoard for each player.
const playerX = "X";
const player0 = "0";

const playerComputer = "0";
let onePlayerMode = false;

// Keeps track of who's turn it is.
let currentPlayer = playerX;

let gameOver = false;

let winsX = 0;
let wins0 = 0;
let turnsRemaining = 8;
// let gameOver = false;

let winnersArray = []; // to keep score.


const updateGameStatus = function() {
  if ( thereIsAWinner() ) { // checks for a winner
    winnersArray.push(currentPlayer); // add currentPlayer to the winner's array
    calculateWinTotals();
    $('#scoreX').text(winsX);
    $('#score0').text(wins0);
    $('#gameStatus').text('Player ' + currentPlayer + '... is the Winner !!!');
    $('#gameStatus').css({'color': 'black'});

  } else if (turnsRemaining === 0) { // game is stalemate
    $('#gameStatus').text(`Game Over...  Stalemate!!!`);
    $('#gameStatus').css({'color': 'black'});
    gameOver = true;
  }  else {
    changeTurn(); // changes turn to the other player.
    $('#gameStatus').text(`Player ${currentPlayer}... your turn`);
  };
}; // end updateGameStatus

// swap the currentPlayer and -1 from turnsRemaining
const changeTurn = function () {
    turnsRemaining = turnsRemaining - 1;
    if (currentPlayer === playerX) {
      currentPlayer = player0;
    } else {
      currentPlayer = playerX;
    }; // end if
}; // end changeTurn

const calculateWinTotals = function() {
  let totalX = 0;
  let total0 = 0;
  // sum the winning totals for each player
  for (var i = 0; i < winnersArray.length; i++) {
    if ( winnersArray[i] === "X" ) {
      totalX++;
    }; // end if for playerX
    if ( winnersArray[i] === "0" ) {
      total0++;
    }; // end if for player0
  };// end for loop
  winsX = totalX;
  wins0 = total0;
};


const thereIsAWinner = function() { // returns true or false accordingly

    // check rows for winner scenario
    for (let r = 0; r < gameBoard.length; r++) {
      let rowWinner = true;
      for (let c = 0; c < gameBoard[r].length; c++) {
        if ( gameBoard[r][c].indexOf(currentPlayer) === -1 ) { //if no match. Using the idea that you only need to disprove the match once for no winner.
          rowWinner = false;
          break; // as soon as no match, break
        }; // and if.
      }; // end for loop for each cell
      if (rowWinner) { // if the rowWinner is true then match change the gameWinner to true;
        gameOver = true;
        return true;
      };
    }; // end for loop for each row.
    //

      // check column for winning scenario
      for (let c = 0; c < gameBoard.length; c++) {
        let colWinner = true;
        for (let r = 0; r < gameBoard.length; r++) {
          if ( gameBoard[r][c].indexOf(currentPlayer) === -1 ) { //if no match. Using the idea that you only need to disprove the match once for no winner.
            colWinner = false;
            break; // as soon as no match, break
          }; // and if.
        }; // end for loop for each cell
        if (colWinner) { // if the colWinner is true then match change the gameWinner to true;
          gameOver = true;
          return true;
        };
      }; // end for loop for each row.

    // Check for diagonal winning scenario
    let diagonalWinner1 = true; // again only need to disprove it once.
    for (let r = 0, c = 0; r < gameBoard.length; r++, c++) {
      if ( gameBoard[r][c].indexOf(currentPlayer) === -1) {
        diagonalWinner1 = false;
        break;
      }; // end if
    }; // end for
    if ( diagonalWinner1 === true ){
      gameOver = true;
      return true;
    };

    // check other diagonal.
    let diagonalWinner2 = true;
    for ( let r = 0, c = (gameBoard.length -1); r < gameBoard.length; r++, c--) {
      if ( gameBoard[r][c].indexOf(currentPlayer) === -1) {
        diagonalWinner2 = false;
        break;
      }; // end if
    }; // end for
    if ( diagonalWinner2 === true ){
      gameOver = true;
      return true;
    };
}; // end thereIsAWinner

// places the move on the gameBoard array and returns true, else returns false if that position has already been taken.
const validMove = function( button ) {
    if ( gameOver ) { // if game is over do nothing.
        return false;
    } else {
      if ( button === `button1`) { // if button1
        if ( !gameBoard[0][0] ) {  // if position is vacant
          gameBoard[0][0] = currentPlayer; // place player's symbol in that position
          return true;
        };
      };
      if ( button === `button2`) {
        if ( !gameBoard[0][1] ) {
          gameBoard[0][1] = currentPlayer;
          return true;
        };
      };
      if ( button === `button3`) {
        if ( !gameBoard[0][2] ) {
          gameBoard[0][2] = currentPlayer;
          return true;
        };
      };
      if ( button === `button4`) {
        if ( !gameBoard[1][0] ) {
          gameBoard[1][0] = currentPlayer;
          return true;
        };
      };
      if ( button === `button5`) {
        if ( !gameBoard[1][1] ) {
          gameBoard[1][1] = currentPlayer;
          return true;
        };
      };
      if ( button === `button6`) {
        if ( !gameBoard[1][2] ) {
          gameBoard[1][2] = currentPlayer;
          return true;
        };
      };
      if ( button === `button7`) {
        if ( !gameBoard[2][0] ) {
          gameBoard[2][0] = currentPlayer;
          return true;
        };
      };
      if ( button === `button8`) {
        if ( !gameBoard[2][1] ) {
          gameBoard[2][1] = currentPlayer;
          return true;
        };
      };
      if ( button === `button9`) {
        if ( !gameBoard[2][2] ) {
          gameBoard[2][2] = currentPlayer;
          return true;
        };
      };
    };// end if gameOver
};

const resetScore = function() { //resets the gameScore
  resetGameBoard();
  winsX = 0;
  wins0 = 0;
  winnersArray = [];
  $('#scoreX').text(winsX);
  $('#score0').text(wins0);
  $('#gameStatus').text('Player X ... your turn');
}; // end resetScore

const playAgain = function() {
  resetGameBoard();
  changeTurn();
  $('#gameStatus').text(`Player ${currentPlayer}... your turn`);
};

const resetGameBoard = function() {
  gameBoard = [ ["", "", "",], [ "", "", "",], [ "", "", "",] ];
  $('button').text('.');
  $('button').css('color', 'rgb(240,240,240');
  $('button:hover').css('color', 'rgb(229,229,229)');
  turnsRemaining = 9; // 9 because changeTurn() is called next, reducing by 1.
  gameOver = false;
}

const playComputerMove = function() {
    //attempts a valid validMove
    // if the move is valid then updated the GUI by placing a zero on the chosen spot.
    let selectedPosition = 'button' + generateMove();

    while ( !validMove(selectedPosition) ) {
      selectedPosition = 'button' + generateMove();
    };// end while loop
    $('#' + selectedPosition).text(currentPlayer);
    $('#' + selectedPosition).css('color', 'black');

}; // end playComputerMove

const generateMove = function() { // return a number representing button on the board.
    // try generate random number
    return Math.floor(Math.random() * 10);
};// end generateMove
