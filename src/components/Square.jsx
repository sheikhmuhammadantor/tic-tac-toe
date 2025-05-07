
export default function Square({ value, onSquareClick }) {
    return (
        <button
            className="bg-white border border-sky-500 h-12 w-12 leading-9 m-1 text-lg cursor-cell rounded-lg font-bold"
            onClick={onSquareClick}>
            {value}
        </button>
    );
}