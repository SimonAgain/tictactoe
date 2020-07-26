Project # 0. Tic Tac Toe.

First project for General Assembly’s Software Engineering Intensive group 37.

This version is a classic implementation of Tic Tac Toe with "0"s and "X"s.

The game features a two player mode and a one player mode, where the single player challenges the "AI".

The AI behaves surprisingly human like and will first try an offensive move, then a defence move, and if neither of those are obvious will choose a random move.

The code is designed with the intention of refactoring to handling any size board. As a result, this implementation is over engineered for 3 x 3 Tic Tac Toe.

This project uses HTML, CSS and Javascript...

It has only been tested on a chrome browser so will only display correctly on the desktop versions on Chrome and Brave.

I hope you enjoy the game.. [click to play the game.](http://SimonAgain.github.io/tictactoe)

Instructions:

* The player who places their icon in a straight line on 3 consecutive squares, wins.

* Players can choose between two player mode or single player mode by selecting "Challenge Human" or "Challenge AI" respectively.

* During game play or once result has been reached, a player can opt to "Challenge Again" or "Reset Game", by pressing the buttons accordingly.

* The game score accumulates when playing consecutive games.

* The looser of the previous game will take the first move of the next game.

* A stalemate will alternate the starting player.


Knows bugs/annoyances:
* Game board buttons show a dot once “Challenge Again” or “Reset Score” has been pressed.
* This is caused by needing a hidden character in place in order to place the “X” or “0”. Without a character already in place, the boxes of the game board would pop out of position when placing the player’s symbol..
* The use of HTML “button”s to make up the game board could be the cause. I would like to try using another method to add boxes to the game board as well as overlaying an image to the location as the symbol rather than “writing” a character to that location.
* Future versions hope to involve more animation.

Reflection:

The project has been a great learning experience and I look forward to further challenging projects. A takeaway for me from this project is to plan the project before coding. I took the attitude of delivering a minimal viable product with the intention of improving my code and design at a later state. Although providing a minimal viable product is sound, I took it too far in this instance. Once too far down the path, there wasn’t the time to remodel the project. A more thought out design could have allowed for expansion and versatile extras. As a result, a lot of the code, such as the AI logic, checking for winners or stalemate are all scalable solutions but other aspects aren't. Still a great learning experience.. This has also been a great introduction to git-hub.
