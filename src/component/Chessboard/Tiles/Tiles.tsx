import "./Tiles.css"

interface Props 
{
    number: number;  
}

export default function Tile({number}:Props) 
{
    if (number %2 ===0)
    {
        return <div className="tile white-tile"><img src="./images/Chess_pdt60.png"/></div>
    }
    else 
    {
        return <div className="tile black-tile"></div>
    }
}