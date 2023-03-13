import './App.css';
import Tile from './components/Tile';
import Scoreboard from './components/Scoreboard';
import React, { useState } from 'react';
function App() {

  const [color, setColor] = useState(["red", "yellow", "pink", "green", "purple", "orange", "blue", "violet", "grey"]);
    // 
  

  return (
    <div className="App">
      <Scoreboard />
      <div className='gameboard'>
        <Tile tileColor={color[1]} color={color} setColor={setColor}/> 
        <Tile tileColor={color[2]} color={color} setColor={setColor}/> 
        <Tile tileColor={color[3]} color={color} setColor={setColor}/> 
        <Tile tileColor={color[4]} color={color} setColor={setColor}/> 
        <Tile tileColor={color[5]} color={color} setColor={setColor}/> 
        <Tile tileColor={color[6]} color={color} setColor={setColor}/> 
        <Tile tileColor={color[7]} color={color} setColor={setColor}/> 
        <Tile tileColor={color[8]} color={color} setColor={setColor}/> 
        <Tile tileColor={color[0]} color={color} setColor={setColor}/> 
      </div>
    </div>
    
  );
}

export default App;
