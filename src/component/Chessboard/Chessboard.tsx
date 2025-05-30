import React from "react";

import "./Chessboard.css"
import Tile from "./Tiles/Tiles";

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = ["8", "7", "6", "5", "4", "3", "2", "1"];

export default function Chessboard() 
{
    let board= []; 
    for (let i=0; i<horizontalAxis.length; i++)
    {
        for (let j=0; j<verticalAxis.length; j++)
        {    
            board.push(<Tile number={i+j}/>)
        }
    }
    return(
    <div id="chessboard"> 
         {board}
    </div>
    ); 
}