import { shuffle } from "lodash";

export default function Tile({
  color,
  tileColor,
  setColor,
  gameBoard,
  setGameBoard,
}) {
  // logic - 9 colours in an array. assign each array item randomly as a value to a square, remove from array as assigned.
  // onClick logic reports colour of the clicked square to a handleGame function. HandleGame adds it to an array, and looks if it has previously been added to array.

function handleClick(e){
    //shuffle colors and update color state
    let newColors = shuffle(color.slice());
    setColor(newColors);
   
    //add color value to gameboard array 
    let newTileColor = e.target.style.backgroundColor.toString();
    let newGameBoard = gameBoard.slice();
    setGameBoard(newGameBoard.concat(newTileColor));
    console.log(gameBoard)
      
}

 
  return (
    <div
      className="tile"
      style={{ backgroundColor: tileColor }}
      onClick={(e) => handleClick(e)}
    ></div>
  );
}
