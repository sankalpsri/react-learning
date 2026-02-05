const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare, turns }) {
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
                {gameBoard.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol className="board-row">
                            {row.map((playerSymbol, colIndex) => (
                                <li key={colIndex}>
                                    <button onClick={() => onSelectSquare(rowIndex, colIndex, playerSymbol)}>{playerSymbol}</button>
                                </li>
                            ))}
                        </ol>
                    </li>
                ))}
            </ol>
        </>
    );

}