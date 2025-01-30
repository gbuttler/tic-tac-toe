//gameboard factory funtion stored in an IIFE

const gameboard = (function createGameboard() {
  console.log("created gamedboard");
  let displayBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  const showBoard = () => {
    const topLine = displayBoard.slice(0, 3);
    const midLine = displayBoard.slice(3, 6);
    const botLine = displayBoard.slice(6, 9);
    console.log(topLine);
    console.log(midLine);
    console.log(botLine);
  };
  const playTurn = (a, b) => {
    displayBoard[a] = b;
    showBoard();
  };
  return { showBoard, playTurn };
})();

//player object
const player = {};

//playGame function
const playGame = function () {};

//NEXT STEPS
//write function to keep track of player turn
//write function to allow player to enter o or x and nothing else
//write function to check that space is empty
//write function to check if someone has won or drawn
