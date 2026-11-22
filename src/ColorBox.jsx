import './App.css'
import React, {useState, useEffect, useContext} from "react"
import { ColorContext, SetColorContext } from './App'
function ColorBox(props)
{
    const color = useContext(ColorContext);
    const setColor = useContext(SetColorContext);

    const Change_color = (e) => {
        setColor(e.target.value);
    }

    useEffect(() => {
        document.getElementById("custom_color").style.backgroundColor = color;
        }, [color]);


    if(props.color == "white")
        return(
            <input className = "colors" style={{backgroundColor: "black"}} type="color" id="custom_color" onBlur={(e) => Change_color(e)}/>
            
    )
    return(
        <div className = "colors" style={{backgroundColor: props.color}} onClick = {()=>setColor(props.color)}>
        </div>
        
    )
}

export default ColorBox;