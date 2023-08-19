import React, { useState, useEffect } from "react";
import "../styles/tictactoe.css";

export const TicTacToe = () => {
  const [gridColor, setGridColor] = useState("red");
  const initialGrid = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ];
  const [grid, setGrid] = useState(initialGrid);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [row, setRow] = useState(-1);
  const [col, setCol] = useState(-1);
  const [currEvent, setCurrEvent] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");

  const Check_GameStatus = () => {
    // Check rows
    for (let row of grid) {
      if (row.every((cell) => cell === row[0] && cell !== -1)) {
        return row[0]
      }
    }

    // Check columns
    for (let col = 0; col < 3; col++) {
      if (grid.every((row) => row[col] === grid[0][col] && row[col] !== -1)) {
        return grid[0][col];
      }
    }

    // Check diagonals
    if ( grid[0][0] !== -1 && grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2] ) {
      return grid[0][0];
    }
    if ( grid[0][2] !== -1 && grid[0][2] === grid[1][1] && grid[0][2] === grid[2][0]) {
      return grid[0][2];
    }

    let count =0
    for(let i=0 ;i <3 ; i++){
      for(let j= 0; j<3; j++){
        if(grid[i][j] != -1){
          count +=1
        }
      }
    }
    if(count == 9){
      return 9;
    }

    return -1;
  };

  useEffect(() => {
    if (selectedIndex !== -1 && row !== -1 && col !== -1) {
      if (grid[row][col] == -1) {
        const clickedCell = currEvent.target;
        setGridColor(gridColor == "red" ? "yellow" : "red");
        clickedCell.style.backgroundColor = gridColor;

        const updateGrid = [...grid];
        updateGrid[row] = [...updateGrid[row]];
        const newValue = gridColor === "red" ? 0 : 1;
        updateGrid[row][col] = newValue;
        setGrid(updateGrid);
        const res = Check_GameStatus();

        if(res == 0){
          setGameOver(true);
          setMessage("Red Wins the Match");
        }
        else if(res == 1){
          setGameOver(true);
          setMessage("Yellow Wins the Match")
        }
        else if(res == 9){
          setGameOver(true);
          setMessage("Match End in Tie")
        }
      }
    }
  }, [currEvent]);

  const handleClick = async (event) => {
    event.stopPropagation();
    setCurrEvent(event);
    setSelectedIndex(parseInt(event.target.id));
    setRow(Math.floor(selectedIndex / 3));
    setCol(selectedIndex % 3);
  };

  return (
    <>
    <div className="game-header">
      {
        gameOver ? <span>{message}</span> : <span>Red v/s Yellow</span>
      }
    </div>
    <div className="main-tictactoe-container">
      {[...Array(9)].map((_, index) => (
        <div
          className="grid-cell"
          id={index}
          key={index}
          onClick={(event) => handleClick(event)}
        ></div>
      ))}
    </div>
    </> 
  );
};
