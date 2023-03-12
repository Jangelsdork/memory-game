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
        <Tile color={color[1]}/> 
        <Tile color={color[2]}/> 
        <Tile color={color[3]}/> 
        <Tile color={color[4]}/> 
        <Tile color={color[5]}/> 
        <Tile color={color[6]}/> 
        <Tile color={color[7]}/> 
        <Tile color={color[8]}/> 
        <Tile color={color[0]}/> 
      </div>
    </div>
    
  );
}

export default App;
