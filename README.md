Project # 0. Tic Tac Toe.

First project for General Assembly’s Software Engineering Intensive group 37.

Project uses HTML, CSS and Javascript to create Tic Tac Toe.

In this version player can toggle between two player mode and single player mode where the program will make selection as player two.

A “Play Again” and a “Reset Score” button allows for further game control.

The game score and when playing consecutive games, the looser of the previous game will take the first move of the next game.

In Version 7, the AI player upgraded. Places random moves unless a row needs to be blocked. ie. Ie the opponent has all the other spaces in that row and you need to take the last space to block them.

The project has been a great learning experience and I look forward to further education in the field. A takeaway from this project is to plan the project before coding. I took the attitude of delivering a minimal viable product with the intention of improving my code and design at a later state. Although providing a minimal viable product is sound, I look it too far in this instance. Once too far down the path, there wasn’t the time to remodel the project. A more thought out design could have allowed for expansion and versatile extras. Still a great learning experience..

Knows bugs/annoyances:
* Game board buttons show a dot once “Play Again” or “Reset Score” has been pressed.
    * This is caused but needing a hidden character in place in order to place the “X” or “0”. Without a character  already in place, the boxes of the game board would pop out of position when placing the player’s symbol..
	  * The use of “button” to make up the game board and the way in which wrote an X or 0 to that button, could be the cause. I would like to try using another method to add boxes to the game board as well as overlaying an image to the location as the symbol rather than “writing” character to that location.
* At version 6, if using the AI player for consecutive games, the player would change sides between games. Meaning the score counter is useless as the human player is forced to change symbol between games.
	  * Future version would assign the AI player to a set symbol.

A working version of the project can be found here. [link to game](http://SimonAgain.github.io/tictactoe
