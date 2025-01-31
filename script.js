//gameboard factory funtion stored in an IIFE

const gamePlay = (function createGameboard() {
  console.log("created gameboard");
  let displayBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  const showBoard = () => {
    const topLine = displayBoard.slice(0, 3);
    const midLine = displayBoard.slice(3, 6);
    const botLine = displayBoard.slice(6, 9);
    console.log(topLine);
    console.log(midLine);
    console.log(botLine);
  };

  //boolean to decide whose turn it is
  let xTurn = true;

  //track turn number
  let turnNumber = 1;

  //check if there is a winner
  let foundWinner = false;

  //assign standard text to print to HTML
  let cellText = "X";

  //alternates whose turn it is
  const whoTurn = () => {
    if (xTurn === true) {
      console.log("it is now the turn of player o");
      xTurn = false;
      document.getElementById("player-on-turn").innerHTML = "Player O turn";
    } else {
      console.log("it is now the turn of player x");
      xTurn = true;
      document.getElementById("player-on-turn").innerHTML = "Player X turn";
    }
  };

  //lets you play a move by entering a grid number and then an x or o
  const playTurn = (a, b) => {
    if (xTurn === true) {
      b = "x";
    } else {
      b = "o";
    }

    //if statement to stop cells overlapping
    if (displayBoard[a] !== " ") {
      console.log("Please choose another square");
    } else {
      displayBoard[a] = b;
      // printMarker();
      showBoard();
      checkWin();

      //stops the game if someone has won
      if (foundWinner === true) {
        console.log("Game Over");
        document.getElementById("game-over").innerHTML = "GAME OVER";
      } else {
        turnNumber++;
        whoTurn();
        console.log(`this is now turn ${turnNumber}`);
      }
    }
  };

  //console statement for who has won
  const winnerIs = () => {
    if (xTurn === true) {
      console.log("Player x has won");
      document.getElementById("player-on-turn").innerHTML = "Player X has won";
      foundWinner = true;
    } else {
      console.log("Player o has won");
      document.getElementById("player-on-turn").innerHTML = "Player O has won";
      foundWinner = true;
    }
  };

  //check for a winner
  const checkWin = () => {
    if (
      //check each row for a winner
      (displayBoard[0] === displayBoard[1] &&
        displayBoard[1] === displayBoard[2] &&
        displayBoard[0] !== " ") ||
      (displayBoard[3] === displayBoard[4] &&
        displayBoard[4] === displayBoard[5] &&
        displayBoard[3] !== " ") ||
      (displayBoard[6] === displayBoard[7] &&
        displayBoard[7] === displayBoard[8] &&
        displayBoard[6] !== " ")
    ) {
      console.log("row win");
      foundWinner = true;
      winnerIs();
    } else if (
      //check each column for a winner
      (displayBoard[0] === displayBoard[3] &&
        displayBoard[3] === displayBoard[6] &&
        displayBoard[0] !== " ") ||
      (displayBoard[1] === displayBoard[4] &&
        displayBoard[4] === displayBoard[7] &&
        displayBoard[1] !== " ") ||
      (displayBoard[2] === displayBoard[5] &&
        displayBoard[5] === displayBoard[8] &&
        displayBoard[2] !== " ")
    ) {
      console.log("column win");
      winnerIs();
      foundWinner = true;
    } else if (
      //check each diagonal for a winner
      (displayBoard[0] === displayBoard[4] &&
        displayBoard[4] === displayBoard[8] &&
        displayBoard[0] !== " ") ||
      (displayBoard[2] === displayBoard[4] &&
        displayBoard[4] === displayBoard[6] &&
        displayBoard[2] !== " ")
    ) {
      console.log("diagonal win");
      winnerIs();
      foundWinner = true;
    } else if (turnNumber === 9) {
      //check for tie
      console.log("it is a tie");
      document.getElementById("player-on-turn").innerHTML = "It is a tie";
      foundWinner = true;
    }
  };

  const playAt = (i) => {
    //update game state
    playTurn(i);
    //update html board
    const squareText = displayBoard[i]; //to write
    const squareNumber = document.getElementById(`square-${i}`);
    squareNumber.innerHTML = squareText; //either X or O
  };

  return { showBoard, playTurn, whoTurn, checkWin, playAt };
})();

//NEXT STEPS
//restart game button
//allow players to be named
//style it
