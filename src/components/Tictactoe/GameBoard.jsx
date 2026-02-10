

export default function GameBoard({ onSelectSquare, board }) {

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((previousGameBoard) => {
    //         const newGameBoard = [...previousGameBoard.map((innerArray) => [...innerArray])];
    //         newGameBoard[rowIndex][colIndex] = playerSymbol;
    //         return newGameBoard;
    //     });

    //     onSelectSquare();
    // }
    return (
        <>
            <ol id="game-board">
                {board.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol className="board-row">
                            {row.map((playerSymbol, colIndex) => (
                                <li key={colIndex}>
                                    <button onClick={() => onSelectSquare(rowIndex, colIndex, playerSymbol)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                                </li>
                            ))}
                        </ol>
                    </li>
                ))}
            </ol>
        </>
    );

}