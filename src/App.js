import React, { Component } from "react";
import "./styles.css";
import Game from "../src/components/Game";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <Game />
      </div>
    );
  }
}

export default App;
