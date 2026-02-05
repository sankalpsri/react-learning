import { useState } from 'react'
import './App.css'
// import Footer from './components/Footer/Footer.jsx'
// import Headers from './components/Headers.jsx'
// import IncButtons from './components/Buttons/IncButtons.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Players from './components/Tictactoe/Players.jsx'
import GameBoard from './components/Tictactoe/GameBoard.jsx'
import Logs from './components/Tictactoe/Logs.jsx'

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');
  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((previousPlayer) => (previousPlayer === 'X' ? 'O' : 'X'));
    setGameTurns(
      (prevousTurns) => {
        let currentPlayer = "X";
        if (prevousTurns.length > 0 && prevousTurns[0].player === "X") {
          currentPlayer = "O";
        }
        const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevousTurns];
        return updatedTurns;
      });
  }
  return (
    <>
      {/* <Headers />
      <h1>Vite + React</h1>
      <div className="card">
        <IncButtons />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer /> */}
      <main className='gboard-container container-fluid text-white p-2'>
        <div id='player' className='row hightlight-player'>
          <Players initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Players initialName="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </div>
        <div className='row'>
          <div className="game-board col-12">
            <div className="row">
              <div className="col-md-6 offset-md-4">
                <GameBoard turns={gameTurns} onSelectSquare={handleSelectSquare} />
              </div>
            </div>
          </div>
        </div>
        <Logs />
      </main>
    </>
  )
}

export default App
