import { useState } from "react";

export default function Logs({ turns }) {
    return (
        <>
            <div id="logs" className="row">
                <div className="col-12">
                    <h3>Game Logs</h3>
                    <ul>
                        {turns.map((turn, index) => (
                            <li key={index}>{`Player ${turn.player} selected square at row ${turn.square.row} and column ${turn.square.col}`}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}