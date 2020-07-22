console.log('Tic Tac Toe');

$(document).ready(function() {

  // $('button').on(`click`, function() {
  //   // $buttonID = $(`button[id]`);
  //   console.log(`button is ` + $(`button`)[id]);
  // });
  $('#button1').on(`click`, function() {
      console.log(`button 1 pressed`);
  });
  $('#button2').on(`click`, function() {
      console.log(`button 2 pressed`);
  });
  $('#button3').on(`click`, function() {
      console.log(`button 3 pressed`);
  });
  $('#button4').on(`click`, function() {
      console.log(`button 4 pressed`);
  });
  $('#button5').on(`click`, function() {
      console.log(`button 5 pressed`);
  });
  $('#button6').on(`click`, function() {
      console.log(`button 6 pressed`);
  });
  $('#button7').on(`click`, function() {
      console.log(`button 7 pressed`);
  });
  $('#button8').on(`click`, function() {
      console.log(`button 8 pressed`);
  });
  $('#button9').on(`click`, function() {
      console.log(`button 9 pressed`);
  });

});// end document ready

// the game board. An array of 3 arrays. Rows and columns.
const gameBoard = [ [ , , ,], [ , , ,], [ , , ,] ];

// places the move on the gameBoard array and returns true, else returns false if that move has already been taken.
const addMove = function( button, player ) {
    if ( button === `button1`) {
      gameBoard[0][0] = player;
    };
    if ( button === `button2`) {
      gameBoard[0][1] = player;
    };
    if ( button === `button3`) {
      gameBoard[0][2] = player;
    };
    if ( button === `button4`) {
      gameBoard[1][0] = player;
    };
    if ( button === `button5`) {
      gameBoard[1][1] = player;
    };
    if ( button === `button6`) {
      gameBoard[1][2] = player;
    };
    if ( button === `button7`) {
      gameBoard[2][0] = player;
    };
    if ( button === `button8`) {
      gameBoard[2][1] = player;
    };
    if ( button === `button9`) {
      gameBoard[2][2] = player;
    };

};
