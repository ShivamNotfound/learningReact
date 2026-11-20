import ColorBox from "./ColorBox";
import './App.css'
function Colors(props){



    return(
        <div className = "colors_container">
            <ColorBox color = "blue" setColor = {props.setColor}></ColorBox>
            <ColorBox color = "red"  setColor = {props.setColor}></ColorBox>
            <ColorBox color = "green" setColor = {props.setColor}></ColorBox>
            <ColorBox color = "yellow" setColor = {props.setColor}></ColorBox>
            <ColorBox setColor = {props.setColor} color = "white"></ColorBox>
        </div>
    )
}

export default Colors;