import React, { useState } from "react";

import Board from "./Board";
import { calculateWinner } from "../calculateWinner";

const styles = {
  width: "200px",
  margin: "20px auto"
};

const Game = () => {
  const [history, setHistory] = useState([Array(25).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (i) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    // If user click an occupied square or if game is won, return
    if (winner || squares[i]) return;
    // Put an X or an O in the clicked square
    squares[i] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  };

  let status;
  if (calculateWinner(history[stepNumber]) === 25) {
    status = "Draw!";
  } else if (winner === "X") {
    status = "Player 1 win!";
  } else if (winner === "O") {
    status = "Player 2 win!";
  } else {
    status = "Turn: " + (xIsNext ? "Player 1" : "Player 2");
  }

  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div style={styles}>
        <p>{status}</p>
      </div>
    </>
  );
};

export default Game;
