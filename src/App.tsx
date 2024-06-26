import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Block from "./components/Block";

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");

  const checkWinner = (state: any[]) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c])
        return true;
    }
    return false;
  };

  const handleOnClick = (index: number) => {
    if (state[index]) return;
    const stateCopy = Array.from(state);
    stateCopy[index] = currentTurn;
    const win = checkWinner(stateCopy);
    
    setCurrentTurn(currentTurn === "X" ? "O" : "X");

    setState(stateCopy);
    if (win) {
      alert(`${currentTurn} won`);
    }
  };
  return (
    <div className="board">
      <div className="row">
        <Block onClick={() => handleOnClick(0)} value={state[0]} />
        <Block value={state[1]} onClick={() => handleOnClick(1)} />
        <Block value={state[2]} onClick={() => handleOnClick(2)} />
      </div>

      <div className="row">
        <Block value={state[3]} onClick={() => handleOnClick(3)} />
        <Block value={state[4]} onClick={() => handleOnClick(4)} />
        <Block value={state[5]} onClick={() => handleOnClick(5)} />
      </div>
      <div className="row">
        <Block value={state[6]} onClick={() => handleOnClick(6)} />
        <Block value={state[7]} onClick={() => handleOnClick(7)} />
        <Block value={state[8]} onClick={() => handleOnClick(8)} />
      </div>
    </div>
  );
}

export default App;
