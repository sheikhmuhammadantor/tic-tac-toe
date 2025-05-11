import calculateWinner from "../utils/calculateWinner";
import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay }) {

    const winner = calculateWinner(squares);
    let status;

    if (winner) {
        status = `Winner Is : ${winner}`;
    } else {
        status = `Next Player Is : ${xIsNext ? "X" : "O"}`
    }

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) return;

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O";

        onPlay(nextSquares);
        console.log(squares);
    }

    return (
        <>
            <h1 className="my-4 text-2xl font-semibold">{status}</h1>
            <div className="flex">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="flex">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="flex">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    );
}