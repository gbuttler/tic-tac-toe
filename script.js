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

  //alternates whose turn it is
  const whoTurn = () => {
    if (xTurn === true) {
      console.log("it is now the turn of player o");
      xTurn = false;
    } else {
      console.log("it is now the turn of player x");
      xTurn = true;
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
      showBoard();
      checkWin();

      //stops the game if someone has won
      if (foundWinner === true) {
        console.log("Game Over");
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
      foundWinner = true;
    } else {
      console.log("Player o has won");
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
    } else if (turnNumber === 8) {
      //check for tie
      console.log("it is a tie");
      foundWinner = true;
    }
  };

  return { showBoard, playTurn, whoTurn, checkWin };
})();

//NEXT STEPS
//check to see if square is empty - no overwriting allowed
