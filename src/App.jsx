import './Style.css';
import Board from './Components/Board';
import { useState } from 'react';
import { calculatewinner } from './Winner';
import StatusMessage from './Components/StatusMessage';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setisXNext] = useState(false);

  const winner = calculatewinner(squares);

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) {
      return;
    }

    setSquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition == position) {
          return isXNext ? 'X' : 'O';
        }
        return squareValue;
      });
    });
    setisXNext(currentisXNext => !currentisXNext);
  };
  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <StatusMessage winner={winner} isXNext={isXNext} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
      <button
        className="resetgame"
        onClick={() => {
          location.reload();
        }}
      >
        Reset Game
      </button>
    </div>
  );
}

export default App;
