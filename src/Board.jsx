import './App.css'
import React, {useState} from 'react'
function Board(props)
{
    const [isDrawing, setIsDrawing] = useState(false);

    
    function UpdateState(state)
    {
        setIsDrawing(state);
    }
    function ChangeColor(id, isRequired)
    {
        if(isDrawing || isRequired)
        {
            document.getElementById(id).style.backgroundColor = props.color;
        }
    }

    const board = Array.from({length : 50}, () => 
                              Array(50).fill("white"));



    const boardTags = board.map((row, rowInd) => (
        <div className = "rows" key = {rowInd}>
            {row.map((pixel, colInd) => (
                <div className = "pixels" 
                     style = {{backgroundColor : pixel}} 
                     id = {`${rowInd*1000}${colInd}`}
                     key = {colInd*1000}
                     onMouseDown = {() => UpdateState(true)}
                     onMouseUp = {() => UpdateState(false)}
                     onMouseEnter = {() => ChangeColor(`${rowInd*1000}${colInd}`, false)}
                     onClick = {() => ChangeColor(`${rowInd*1000}${colInd}`, true)}>
                </div>
                )
            )}
        </div>
    ))


    return(
        <center>
        <div id="boardContainer">
            
            {boardTags}
            
        </div>
        </center>
    )
}

export default Board;