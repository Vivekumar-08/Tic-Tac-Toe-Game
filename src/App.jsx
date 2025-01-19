import { useState } from "react";
import "./App.css";
import "./app.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <div className="container">
          <div className="msg__container hide">
            <p id="msg"></p>
          </div>
          <div className="title">
            <h1>Tic Tac Toe</h1>
            <div className="para">The first player is Player X, and the second player is Player O</div>
            <div className="para1">When the game box is clicked, the game starts</div>
          </div>
          <div className="gameBox">
            <button className="box"></button>
            <button className="box"></button>
            <button className="box"></button>
            <button className="box"></button>
            <button className="box"></button>
            <button className="box"></button>
            <button className="box"></button>
            <button className="box"></button>
            <button className="box"></button>
          </div>
          <div className="btn">
            <button className="resetBtn">Reset</button>
            <button className="playBtn">Play</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
