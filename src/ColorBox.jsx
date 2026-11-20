import './App.css'
import React, {useState} from "react"
function ColorBox(props)
{
    const [custom_color, setCustom_color] = useState("black");
    const Change_color = (e) => {
        setCustom_color(e.target.value);
        props.setColor(e.target.value);
    }
    if(props.color == "white")
        return(
            <input className = "colors" style={{backgroundColor: custom_color}} type="color" id="custom_color" onChange={(e) => Change_color(e)}/>
            
    )
    return(
        <div className = "colors" style={{backgroundColor: props.color}} onClick = {()=>props.setColor(props.color)}>
        </div>
        
    )
}

export default ColorBox;