console.log('Tic Tac Toe');

$(document).ready(function() {

  $('#button1').on(`click`, function() {
    if ( validMove(`button1`, currentPlayer)) { // position is not already taken
      $('#button1').html(currentPlayer); // place players symbol on the position
      $('#button1').css('color', 'black'); // make the text black
      updateGameStatus(); // updates the status
    };
  });
  $('#button2').on(`click`, function() {
      if ( validMove(`button2`, currentPlayer)) {
        $('#button2').html(currentPlayer);
        $('#button2').css('color', 'black');
        updateGameStatus();
      };
  });
  $('#button3').on(`click`, function() {
      if ( validMove(`button3`, currentPlayer)) {
        $('#button3').html(currentPlayer);
        $('#button3').css('color', 'black');
        updateGameStatus();
      };
  });
  $('#button4').on(`click`, function() {
      if ( validMove(`button4`, currentPlayer)) {
        $('#button4').html(currentPlayer);
        $('#button4').css('color', 'black');
        updateGameStatus();
      };
  });
  $('#button5').on(`click`, function() {
      if ( validMove(`button5`, currentPlayer)) {
        $('#button5').html(currentPlayer);
        $('#button5').css('color', 'black');
        updateGameStatus();
      };
  });
  $('#button6').on(`click`, function() {
      if ( validMove(`button6`, currentPlayer)) {
        $('#button6').html(currentPlayer);
        $('#button6').css('color', 'black');
        updateGameStatus();
      };
  });
  $('#button7').on(`click`, function() {
      if ( validMove(`button7`, currentPlayer)) {
        $('#button7').html(currentPlayer);
        $('#button7').css('color', 'black');
        updateGameStatus();
      };
  });
  $('#button8').on(`click`, function() {
      if ( validMove(`button8`, currentPlayer)) {
        $('#button8').html(currentPlayer);
        $('#button8').css('color', 'black');
        updateGameStatus();
    };
  });
  $('#button9').on(`click`, function() {
      if ( validMove(`button9`, currentPlayer)) {
        $('#button9').html(currentPlayer);
        $('#button9').css('color', 'black');
        updateGameStatus();
      };
  });

});// end document ready

// the game board. An array of 3 arrays. Rows and columns.
let gameBoard = [ ["", "", "",], [ "", "", "",], [ "", "", "",] ];

// The symbols to use on the gameBoard for each player.
const playerX = "X";
const player0 = "0";

// Keeps track of who's turn it is.
let currentPlayer = playerX;

let gameOver = false;

let winnerX = false;
let winner0 = false;
let turnsRemaining = 8;
// let gameOver = false;

const updateGameStatus = function() {
  if ( thereIsAWinner() ) {
    $('#gameStatus').text('Player ' + currentPlayer + ' is the winner !!!');
    $('#gameStatus').css({'color': 'black'});
  } else if (turnsRemaining === 0) {
    $('#gameStatus').text(`Game Over.. It's a stalemate!!!`);
    $('#gameStatus').css({'color': 'black'});
  }  else {
    changeTurn();
    $('#gameStatus').text(`Player ${currentPlayer}... your turn`);
  };
};

// change the currentPlayer and -1 from turnsRemaining
const changeTurn = function () {
    turnsRemaining = turnsRemaining - 1;
    if (currentPlayer === playerX) {
      currentPlayer = player0;
    } else {
      currentPlayer = playerX;
    }; // end if
};

const thereIsAWinner = function() {
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
    // winning scenario is
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

// places the move on the gameBoard array and returns true, else returns false if that move has already been taken.
const validMove = function( button ) {
    if (gameOver ) { // if game is over do nothing.
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

const resetGameBoard = function() {
  gameBoard = [ ["", "", "",], [ "", "", "",], [ "", "", "",] ];
};

//
// const playGame = function() {
//   let gameComplete = False;
//   let winnerX = False;
//   let winner0 = False;
//
//   while ( !gameComplete ) {
//     //player X turn
//     listenForSelection("X");
//   }
//
// }
