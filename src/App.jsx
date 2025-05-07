/* 
Game
    -> Board
        -> Square
    -> History
*/
import Game from "./components/Game"

function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl text-center my-4 font-bold">Tic Tac Toe</h1>
        <Game />
      </div>
    </>
  )
}

export default App
