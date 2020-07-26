/* game version_10 .. Submitted versioin. */

$(document).ready(function() {

  $('button').on(`click`, function() {
    const buttonPressed = this.id; // get the ID of the button.
    if ( validMove(buttonPressed) ) {
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
    onePlayerMode = false;
    resetScore();
    playAgain();
    $('#startChallenge').attr('type','button');
    $('#challengeAI').attr('type','button');
    $('#playAgain').attr('type','hidden');
    $('#resetGame').attr('type','hidden');
    $('#gameStatus').text(` Choose an option `);
    gameOver = true;
  });

  $('#playAgain').on('click', function() {
    playAgain();
  });

  $('#startChallenge').on('click', function() {
      gameOver = false;
      $('#startChallenge').attr('type','hidden');
      $('#challengeAI').attr('type','hidden');
      $('#playAgain').attr('type','button');
      $('#resetGame').attr('type','button');
      $('#gameStatus').text(`Player ${currentPlayer}... your turn`);
  });

  $('#challengeAI').on('click', function() {
      gameOver = false;
      $('#startChallenge').attr('type','hidden');
      $('#challengeAI').attr('type','hidden');
      $('#playAgain').attr('type','button');
      $('#resetGame').attr('type','button');

      onePlayerMode = true; // change to onePlayerMode
      currentPlayer = playerX; // always assign the human to playerX

      $('#gameStatus').text(`Player ${currentPlayer}... your turn`);
  });

});// end document ready


/////////////  global variables   //////////////////////

// the game board. An array of 3 arrays. Rows and columns.
let gameBoard = [ ["", "", "",], [ "", "", "",], [ "", "", "",] ];

// The symbols to use on the gameBoard for each player.
const playerX = "X";
const player0 = "0";

const playerComputer = "0";
let onePlayerMode = false; // used to keep the computer on player0

// Keeps track of who's turn it is.
let currentPlayer = playerX;

let gameOver = true;

let winsX = 0;
let wins0 = 0;
let turnsRemaining = 8;
// let gameOver = false;

let winnersArray = []; // to keep score.

////////////////////// game functions ///////////////////

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
      if ( gameBoard[r][c].indexOf(currentPlayer) === -1) { // if the current player is not there
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

// validMove places the move on the gameBoard array and returns true,
// else returns false if that position has already been taken.
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
  gameOver=false;
  resetGameBoard();
  changeTurn();
  if (onePlayerMode && (currentPlayer === player0)) { // if it's on AI player and it's the AI's turn.
    playComputerMove();
    changeTurn();
    //might need to update status on who's play it is next
    // $('#gameStatus').text(`Player ${currentPlayer}... your turn`);
  };
    $('#gameStatus').text(`Player ${currentPlayer}... your turn`);

}; // end play again.

const resetGameBoard = function() {
  gameBoard = [ ["", "", "",], [ "", "", "",], [ "", "", "",] ];
  $('button').text('.');
  $('button').css('color', 'rgb(240,240,240');
  $('button:hover').css('color', 'rgb(229,229,229)');
  turnsRemaining = 9; // 9 because changeTurn() is called next, reducing by 1.
  //gameOver = true;
}

//////////////////////////////    AI player      ///////////////////////////

const playComputerMove = function() {

  // generate a priority defensive move

    const defensiveMove = generateDefensiveMove(); // get the defensive move if determined.
                                                  // defensiveMove will be an array.
    let buttonName = 'nothingYet'; // to be assigned in the if where it's needed.

    if ( defensiveMove ) {
        buttonName = convertToButtonName(defensiveMove);
        validMove(buttonName);
    } else { // if not a defensive move then do a random move.
        buttonName = 'button' + generateRandomMove();
        while ( !validMove(buttonName) ) { //if spot is taken, then generate another random move.
          buttonName = 'button' + generateRandomMove();
        };// end while loop
    };// end if.
      // update GUI by placing piece on chosen spot.
    $('#' + buttonName).text(currentPlayer);
    $('#' + buttonName).css('color', 'black');

}; // end playComputerMove

const generateRandomMove = function() { // return a number representing button on the board.
    // try generate random number
    return Math.floor(Math.random() * 10);
};// end generateMove

const convertToButtonName = function(coordinates) { //use the board array coordinates to make a button name.
  const rowPos = coordinates[0];
  const colPos = coordinates[1];
  let buttonNumber = 0;
  if ( rowPos === 0 ) {
    buttonNumber = rowPos + colPos + 1;
  } else if ( rowPos === 1) {
    buttonNumber = rowPos + colPos + 3;
  } else {
    buttonNumber = rowPos + colPos + 5;
  }; // end if.
  return 'button'+buttonNumber;
}; // end generateButtonName

//////////////////  generate defensive move ie. the brains  /////////////

const generateDefensiveMove = function() { // this function only needs to determine the first instance to block.

    let opponentPlayer = playerX; // Doesn't matter, it will be assigned next.

    if (currentPlayer === playerX) { // places the opponent in a local variable.
        opponentPlayer = player0;
    }; // end if

    let blockPositionRow = 0; // the determined position.
    let blockPositionCol = 0;

    let defensiveBlock = false; // if the move has been found.

    let opponentDanger = 0; // the danger level. Higher the more occurances of the opponent's player.


    //checking ROWs only.. Will check columns later.
    for (let r = 0; r < gameBoard.length; r++) {
      opponentDanger = 0; // resets for each row as we're checking rows now.
      for (let c = 0; c < gameBoard[r].length; c++) { // check each cell in that row.
        if ( gameBoard[r][c].indexOf(currentPlayer) >= 0 ) {// if currentPlayer occupies that spot..
            break; // go to the next row because that row is safe.

        } else if ( gameBoard[r][c].indexOf(opponentPlayer) === -1  ) { //if space is not taken, it's a potential move.
            blockPositionCol = c; // assign the potential column position.
            blockPositionRow = r; // assigns potential row position.
            if (opponentDanger === (gameBoard.length - 1)) { // we are on the last space on this row without the opponent's piece and it's empty. ie. if the opponentDanger is 2, in this game size of 3x3.
                defensiveBlock = true; // signaling we found the highest priority move.
                break; // call the urgent move !!!
            }; // end nested if..

        } else { // if the opponent has a piece there, danger level increases.
            opponentDanger++;
            if (opponentDanger === (gameBoard.length - 1)) { // because we just added to opponentDanger we could be on the second last space. Only enters here when the danger level is reached. Need to check if that last position is occupied.
                if ( c === gameBoard.length - 2 ) { // if we are currently looping in the second last position.
                    if ( gameBoard[r][c+1].indexOf(currentPlayer) >= 0 ) {// currentPlayer is there.
                        opponentDanger = 0; // reset the dangerLevel and breaks for the next row.
                        break;              // as this row is safe.
                    } else { // if the space is blank, must take it.
                        blockPositionCol = gameBoard.length - 1;
                        blockPositionRow = r;
                      }; // end if.
                }; // end if
                defensiveBlock = true; // signaling we found the highest priority move.
                break; // call the urgent move !!!
            }; // end nested if..
        };// end if
      }; // end for loop; for each column...
      if (defensiveBlock) { // if defensive move is found
          const pos = [blockPositionRow,blockPositionCol];
          return pos;
      }; // end if
    }; // end for loop for each row.

    //checking COLUMNS only.. Will try just swapping out c's for r's. Look at comments for rows if needed.
    for (let c = 0; c < gameBoard.length; c++) {
      opponentDanger = 0; // resets with each column.
      for (let r = 0; r < gameBoard.length; r++) { // check each cell in that column.
        if ( gameBoard[r][c].indexOf(currentPlayer) >= 0 ) {// if currentPlayer occupies that spot..
            break; // that column is safe.

        } else if ( gameBoard[r][c].indexOf(opponentPlayer) === -1  ) { //if space is not taken, it's a potential move.
            blockPositionCol = c; // assign the potential column position.
            blockPositionRow = r; // assigns potential row position.
            if (opponentDanger === (gameBoard.length - 1)) { // means there is only one space on this column without the opponent's piece. ie. if the opponentDanger is 2, in this game size of 3x3.
                defensiveBlock = true; // signaling we found the highest priority move.
                    break; // call the urgent move !!!
            }; // end nested if..

        } else { // if the opponent has a piece there, danger level increases.
            opponentDanger++;
            if (opponentDanger === (gameBoard.length - 1)) { // means there is only one space without the opponent's piece. In this game size, if the matchCounter is 2. Only enters here when the danger level is reached. Need to check if that last position is occupied.
                if ( r === gameBoard.length - 2 ) { // if we are currently looping in the second last position.
                  if ( gameBoard[r+1][c].indexOf(currentPlayer) >= 0 ) {// currentPlayer is there.
                    opponentDanger = 0; // reset the dangerLevel and breaks for the next column.
                    break;
                  } else { // if the space is blank
                    blockPositionCol = c;
                    blockPositionRow = gameBoard.length - 1;
                  }; // end if.
                };
                defensiveBlock = true; // signaling we found the highest priority move.
                break; // call the urgent move !!!
            }; // end nested if..
        };// end if
      }; // end for loop; for each column...
      if (defensiveBlock) { // if defensive move is found
        const pos = [blockPositionRow,blockPositionCol];
        return pos;
      }; // end if
    }; // end for loop for each row.


    // // Check for diagonal danger.

    let spaceFound = false;
    opponentDanger = 0; // resetting the dangerLevel meter.

    for (let r = 0, c = 0; r < gameBoard.length; r++, c++) {
      if ( gameBoard[r][c].indexOf(currentPlayer) >= 0) { // if AI has a piece there.
        break; // the diagonal is safe as the AI has a piece there.
      } else if ( gameBoard[r][c].indexOf(opponentPlayer) >= 0 ) { // if the opponent has a piece there.
            opponentDanger++; //dangerLevel increases

            if ( opponentDanger === (gameBoard.length - 1) ) {// ie. if danger threshold is met.
              if ( spaceFound ) { // and we have previously found a potential move.
                defensiveBlock = true;
                break; // execute the move.

              } else { // but if no potential move was found.
                if ( r === gameBoard.length - 2 ){ // if we are on the second last space, need to check if last space if free.
                  if ( gameBoard[r+1][c+1].indexOf(currentPlayer) === -1 ) { // if last space is free, claim it. Otherwise it's ocupied by the AI (currentPlayer).
                    blockPositionCol = c+1; // assign the potential column position.
                    blockPositionRow = r+1; // assigns potential row position.
                    spaceFound = true; // resigters that we have found a potential move.
                    defensiveBlock = true;
                    break;
                  }; // end if
                };// end if
              }; //end if not space found
            }; // end if danger threshold is met.

      } else { // the space is blank. So log the space as potential move.
        blockPositionCol = c; // assign the potential column position.
        blockPositionRow = r; // assigns potential row position.
        spaceFound = true; // resigters that we have found a potential move.
      };// end if
    }; // end for loop;
    if (defensiveBlock) { // if defensive move is found
      const pos = [blockPositionRow,blockPositionCol];
      return pos;
    };

              ////// the other diagonal now.
    opponentDanger = 0; // resetting the dangerLevel meter.
    spaceFound = false; // resets the space found from last diagonal check.
    for (let r = 0, c = (gameBoard.length -1); r < gameBoard.length; r++, c--) {
      if ( gameBoard[r][c].indexOf(currentPlayer) >= 0) { // if AI has a piece there.
        break; // the diagonal is safe as the AI has a piece there.
      } else if ( gameBoard[r][c].indexOf(opponentPlayer) >= 0 ) { // if the opponent has a piece there.
            opponentDanger++; //dangerLevel increases

            if ( opponentDanger === (gameBoard.length - 1) ) {// ie. if danger threshold is met.
              if ( spaceFound ) { // and we have previously found a potential move.
                defensiveBlock = true;
                break; // execute the move.

              } else { // but if no potential move was found.
                if ( r === gameBoard.length - 2 ){ // if we are on the second last space, need to check if last space if free.
                  if ( gameBoard[r+1][c-1].indexOf(currentPlayer) === -1 ) { // if last space is free, claim it. Otherwise it's ocupied by the AI (currentPlayer).
                    blockPositionCol = c-1; // assign the potential column position.
                    blockPositionRow = r+1; // assigns potential row position.
                    spaceFound = true; // resigters that we have found a potential move.
                    defensiveBlock = true;
                    break;
                  }; // end if
                };// end if
              }; //end if not space found
            }; // end if danger threshold is met.

      } else { // the space is blank. So log the space as potential move.
        blockPositionCol = c; // assign the potential column position.
        blockPositionRow = r; // assigns potential row position.
        spaceFound = true; // resigters that we have found a potential move.
      };// end if
    }; // end for loop;
    if (defensiveBlock) { // if defensive move is found
      const pos = [blockPositionRow,blockPositionCol];
      return pos;
    };

 };// end generateDefensiveMove
