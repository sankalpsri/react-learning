import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Players from './components/Tictactoe/Players.jsx'
import GameBoard from './components/Tictactoe/GameBoard.jsx'
import Logs from './components/Tictactoe/Logs.jsx'
import { WINNING_COMBINATIONS } from './winning-combinations.js'
import GameOver from './components/Tictactoe/GameOver.jsx'


function deriveActivePlayer(turns) {
  let currentPlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;

}

function deriveGameBoard(gameTurns) {
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  let gameBoard = [...initialGameBoard.map((innerArray) => [...innerArray])];
  gameTurns.forEach((turn) => {
    const { row, col } = turn.square;
    gameBoard[row][col] = turn.player;
  });
  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];

    if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
      winner = players[firstSquare];
      console.log("Winner:", firstSquare);
      break;
    }
  }
  return winner;
}

function App() {
  const [players, setPlayers] = useState([
    { X: "Player 1" },
    { O: "Player 2" }
  ]);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);

  const isDraw = gameTurns.length === 9 && !winner;

  function handlePlayerNameChange(playerSymbol, newName) {
    setPlayers((previousPlayers) => {
      return {
        ...previousPlayers,
        [playerSymbol]: newName
      }
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(
      (prevousTurns) => {
        let currentPlayer = deriveActivePlayer(prevousTurns);
        const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevousTurns];
        return updatedTurns;
      });
  }
  return (
    <>
      <main className='gboard-container container-fluid text-white p-2'>
        <div id='player' className='row hightlight-player'>
          <Players initialName="Player 1" symbol="X" isActive={activePlayer === "X"} changePlayerName={handlePlayerNameChange} />
          <Players initialName="Player 2" symbol="O" isActive={activePlayer === "O"} changePlayerName={handlePlayerNameChange} />
        </div>
        <div className='row'>
          <div className="game-board col-12">
            <div className="row">
              <div className="col-md-6 offset-md-4">
                {(winner || isDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
                <GameBoard board={gameBoard} onSelectSquare={handleSelectSquare} />
              </div>
            </div>
          </div>
        </div>
        <Logs turns={gameTurns} />
      </main >
    </>
  )
}
export default App
