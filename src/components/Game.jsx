import { useState } from "react";
import Board from "./Board";

export default function Game() {

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);
    const [currentMove, setCurrentMove] = useState(0);

    const currentSquares = history[currentMove];

    const handelPlay = (nextSquares) => {
        setXIsNext(!xIsNext);
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(move) {
        setCurrentMove(move)
        setXIsNext(move % 2 === 0);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = `Go to the move $ ${move}`;
        } else {
            description = `Go to Start the Game !`;
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })

    return (
        <div className="flex items-center justify-center gap-6">
            <div>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handelPlay} />
            </div>
            <div className="border-2 p-2 rounded-2xl">
                <ol className="text-lg">
                    {moves}
                </ol>
            </div>
        </div>
    );
}