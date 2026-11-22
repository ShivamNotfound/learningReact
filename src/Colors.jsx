import ColorBox from "./ColorBox";
import './App.css'
function Colors(){

    return(
        <div className = "colors_container">
            <ColorBox color = "blue"></ColorBox>
            <ColorBox color = "red"></ColorBox>
            <ColorBox color = "green"></ColorBox>
            <ColorBox color = "yellow"></ColorBox>
            <ColorBox color = "white"></ColorBox>
        </div>
    )
}

export default Colors;