import React from "react";

import "./Chessboard.css"
import Tile from "./Tiles/Tiles";

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = ["8", "7", "6", "5", "4", "3", "2", "1"];

interface Piece {
    image:string; 
    x: number; 
    y: number; 
}

const pieces : Piece[] = []; 

for (let i=0; i<8; i++)
{
    pieces.push({image:"./images/Chess_pdt60.png", x:1,y:i}) 
    pieces.push({image:"./images/Chess_plt60.png", x:6,y:i})
}

pieces.push({image:"./images/Chess_bdt60.png", x:0,y:2})
pieces.push({image:"./images/Chess_bdt60.png", x:0,y:5})
pieces.push({image:"./images/Chess_blt60.png", x:7,y:2})
pieces.push({image:"./images/Chess_blt60.png", x:7,y:5})
pieces.push({image:"./images/Chess_kdt60.png", x:0,y:4})
pieces.push({image:"./images/Chess_klt60.png", x:7,y:4})
pieces.push({image:"./images/Chess_ndt60.png", x:0,y:1})
pieces.push({image:"./images/Chess_ndt60.png", x:0,y:6})
pieces.push({image:"./images/Chess_nlt60.png", x:7,y:1})
pieces.push({image:"./images/Chess_nlt60.png", x:7,y:6})
pieces.push({image:"./images/Chess_qdt60.png", x:0,y:3})
pieces.push({image:"./images/Chess_qlt60.png", x:7,y:3})
pieces.push({image:"./images/Chess_rdt60.png", x:0,y:0})
pieces.push({image:"./images/Chess_rdt60.png", x:0,y:7})
pieces.push({image:"./images/Chess_rlt60.png", x:7,y:0})
pieces.push({image:"./images/Chess_rlt60.png", x:7,y:7})


function grabPiece(e:React.MouseEvent<HTMLElement, MouseEvent>)
{
    console.log(e.target); 
}


export default function Chessboard() 
{
    let board= []; 
    for (let i=0; i<horizontalAxis.length; i++)
    {
        for (let j=0; j<verticalAxis.length; j++)
        {    
            let image= undefined; 
            pieces.forEach(p => {
                if (p.x===i && p.y===j)
                {
                    image= p.image 
                }
            })

            board.push(<Tile key={`${i}${j}`} number={i+j} image={image}/>)
        }
    }
    return(
    <div id="chessboard" onMouseDown={e => grabPiece(e)}> 
         {board}
    </div>
    ); 
}