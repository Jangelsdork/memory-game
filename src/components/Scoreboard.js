export default function Scoreboard( gameBoard ) {
console.log(gameBoard.gameBoard.length)
  return (
    <div>
      <div>Score: {gameBoard.gameBoard.length} </div>
      <div>Best Score:</div>
    </div>
  );
}
