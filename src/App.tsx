import React, { useState } from 'react';
import './App.css';
import Heading from './Components/Heading/Heading';
import Board from './Components/Board/Board';

function App() {
  const [board, setBoard] = useState<string[]>(
    ["", "", "", "", "",
      "", "", "", "", "",
      "", "", "", "", "",
      "", "", "", "", "",
      "", "", "", "", "",
      "", "", "", "", "",])
  return (
    <div className="App">
      <Heading type="h1" text="Wordiee" />
      <div className="board-container">
        <Board board={board} />
      </div>
    </div>
  );
}

export default App;
